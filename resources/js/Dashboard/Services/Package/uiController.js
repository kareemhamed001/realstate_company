import Package from "@/Api/Package/api";
import CardBuilder from "../../../helpers/CardBuilder.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swal from "sweetalert2";

class PackageUiController {

    constructor() {
        this.packageApi = new Package();
        this.packageApi.setPreviewType('swal')
        this.packageApi.setResponseType('json')
    }


    async showPreview(packages, containerId = 'packagesContainer') {
        try {
            let packagesContainer = document.getElementById(containerId);
            if (!packagesContainer) {
                throw new Error('Container not found');

            }
            packagesContainer.innerHTML = ''
            if (packages && packages.length > 0 && typeof packages.forEach === 'function') {
                packages.forEach(item => {
                    this.append(item, packagesContainer)
                })
                this.addItemCard(packagesContainer)
            }
        } catch (e) {
            throw e;
        }
    }

    addItemCard(itemsContainer) {
        let card = new CardBuilder();
        card.setCardContainerClass(['col-md-3', 'col-sm-6', 'col-12', 'px-2', 'py-2'])

        card.setCardId('package-add');
        card.setCardClass(['h-100', 'custom-card', 'border-0', 'rounded-4', 'shadow-sm']);

        card.setBody(`

            <div class="card-body h-100 d-flex flex-column justify-content-center align-items-center" style="cursor: pointer;">
               <svg width="31" height="39" viewBox="0 0 31 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 8.8453V30.3269" stroke="#A3AED0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.9375 19.5861H7.0625" stroke="#A3AED0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <p class="text-muted">Add A New Package</p>
            </div>

        `);


        card.setCardAttribute('data-bs-toggle', 'modal');
        card.setCardAttribute('data-bs-target', '#exampleModal');

        let cardItem = card.build();


        itemsContainer.appendChild(cardItem);
    }


    append(item, itemsContainer) {

        try {
            let card = new CardBuilder();
            card.setCardContainerClass(['col-md-3', 'col-sm-6', 'col-12', 'px-2', 'py-2'])

            card.setCardContainerId('package-' + item.id)
            card.setCardClass(['h-100', 'custom-card', 'border-0', 'rounded-4', 'shadow-sm']);
            let eyeStatus = ''
            if (item.status === 'active') {
                eyeStatus = 'fa fa-eye text-success'
            } else {
                eyeStatus = 'fa fa-eye-slash text-danger'
            }


            card.setBody(`

                <img  src="${item.cover_image}" class="card-img-top rounded-4" alt="...">
                <div class="position-absolute bg-light d-flex justify-content-center align-items-center" style="top: 20px;right: 25px;width: 30px;height: 30px;border-radius: 50%;">
                <i class="${eyeStatus}  " ></i>
                </div>
                <p class="card-heading card-name">${item.name}</p>
                <p class="text-muted card-description"> ${item.description.substring(0, 50)}</p>

                <div class="card-actions">

                    <div class="rounded-5 text-danger delete-btn" style="cursor: pointer" data-id="${item.id}">Delete</div>
                    <button class="custom-btn rounded-5 bg-primary text-white edit-button"  data-id="${item.id}">Edit</button>
                </div>

            `);
            let cardItem = card.build();

            cardItem.addEventListener('click', async (e) => {
                const editButton = e.target.closest('.edit-button');
                const deleteButton = e.target.classList.contains('delete-btn') ? e.target : e.target.closest('.delete-btn');
                if (editButton) {
                    const itemId = editButton.dataset.id;
                    this.edit(itemId);
                }

                if (deleteButton) {
                    const itemId = deleteButton.dataset.id;

                    if (!itemId) {
                        throw new Error('Item id not found');
                    }
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete!',
                        cancelButtonText: 'No, cancel!',
                        reverseButtons: true
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            let response=await this.packageApi.delete(itemId)
                            if (response.response.status===200){
                                this.deleteItemFromPreview(itemId, itemsContainer);
                                Swal.fire(response.swalResponse);

                            }
                        } else if (
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            Swal.fire(
                                'Cancelled',
                                'Delete cancelled',
                                'error'
                            )
                        }

                    });

                }
            });

            itemsContainer.appendChild(cardItem);

        } catch (e) {
            throw e;
        }
    }

    deleteItemFromPreview(itemId, itemsContainer) {
        try {
            let item = document.getElementById('package-' + itemId);
            if (item) {
                itemsContainer.removeChild(item);
            }
        } catch (e) {
            throw e;
        }
    }

    async edit(id) {
        try {
            let item = await this.packageApi.show(id);


            let nameInput = document.querySelector('#editPackageForm input[name="name"]');
            let descriptionInput = document.querySelector('#editPackageForm textarea[name="description"]');
            let statusSelect = document.querySelector('#editPackageForm select[name="status"]');
            let idInput = document.querySelector('#editPackageForm input[name="id"]');


            if (item.response.data.status === 200) {
                console.log(item.response.data.data)


                var myModal = new bootstrap.Modal(document.getElementById('editPackageModal'));

                nameInput.value = item.response.data.data.name;
                descriptionInput.value = item.response.data.data.description;
                statusSelect.value = item.response.data.data.status;
                idInput.value = item.response.data.data.id;

                myModal.show()


            } else {
                throw new Error('Item not found');
            }
        } catch (e) {
            throw e;
        }

    }

    async showPagination(pagination, containerId = 'pagination', callback = null, previewType = 'swal', responseType = 'json') {
        try {
            let paginationContainer = document.getElementById(containerId);
            paginationContainer.innerHTML = '';

            let pages = Math.ceil(pagination.total / pagination.per_page);

            let paginationItemsContainer = document.createElement('ul');
            paginationItemsContainer.classList.add('pagination', 'p-1');

            // Calculate the total number of pages
            let maxPages = Math.min(pages, 10);

            // Calculate the start and end of the current set of pages
            let startPage = Math.max(1, pagination.current_page - Math.floor(maxPages / 2));
            let endPage = Math.min(pages, startPage + maxPages - 1);

            // Add "Previous" button
            if (pagination.current_page > 1) {
                let prevPaginationItem = document.createElement('li');
                prevPaginationItem.classList.add('custom-page-item');
                let prevPaginationLink = document.createElement('a');
                prevPaginationLink.classList.add('custom-page-link');
                prevPaginationLink.setAttribute('href', '#');
                prevPaginationLink.innerText = 'Previous';
                prevPaginationItem.appendChild(prevPaginationLink);
                paginationItemsContainer.appendChild(prevPaginationItem);

                prevPaginationLink.addEventListener('click', async (e) => {
                    e.preventDefault();

                    let prevPage = Math.max(1, pagination.current_page - 10);


                    let packages = await this.packageApi.list(prevPage, pagination.per_page, previewType, responseType);
                    if (packages.response.status === 200) {
                        await this.showPreview(packages.response.data.data.data);
                        await this.showPagination(packages.response.data.data, 'pagination', callback);
                    }
                });
            }

            // Add page links
            for (let i = startPage; i <= endPage; i++) {
                let paginationItem = document.createElement('li');
                paginationItem.classList.add('custom-page-item');
                let paginationLink = document.createElement('a');
                paginationLink.classList.add('custom-page-link');
                paginationLink.setAttribute('href', '#');
                paginationLink.innerText = i;

                if (i === pagination.current_page) {
                    paginationItem.classList.add('active');
                }

                paginationItem.appendChild(paginationLink);
                paginationItemsContainer.appendChild(paginationItem);

                paginationLink.addEventListener('click', async (e) => {
                    e.preventDefault();
                    if (callback) {
                        callback(i);
                    }
                    let packages = await this.packageApi.list(i, pagination.per_page, previewType, responseType);
                    if (packages.response.status === 200) {
                        await this.showPreview(packages.response.data.data.data);
                        await this.showPagination(packages.response.data.data, 'pagination');
                    }
                });
            }

            // Add "Next" button
            if (pagination.current_page < pages) {
                let nextPage = Math.min(pages, endPage + 1);
                let nextPaginationItem = document.createElement('li');
                nextPaginationItem.classList.add('custom-page-item');
                let nextPaginationLink = document.createElement('a');
                nextPaginationLink.classList.add('custom-page-link');
                nextPaginationLink.setAttribute('href', '#');
                nextPaginationLink.innerText = 'Next';
                nextPaginationItem.appendChild(nextPaginationLink);
                paginationItemsContainer.appendChild(nextPaginationItem);

                nextPaginationLink.addEventListener('click', async (e) => {
                    e.preventDefault();

                    let packages = await this.packageApi.list(nextPage, pagination.per_page);
                    if (packages.response.status === 200) {
                        await this.showPreview(packages.response.data.data.data);
                        await this.showPagination(packages.response.data.data, 'pagination');
                    }
                });
            }

            paginationContainer.appendChild(paginationItemsContainer);

        } catch (e) {
            console.error(e.message);
            throw e;
        }
    }


}


export default PackageUiController
