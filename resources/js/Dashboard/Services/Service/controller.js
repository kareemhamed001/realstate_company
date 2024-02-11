import Service from "../../../Api/Service/api";
import CardBuilder from "../../../helpers/CardBuilder.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swal from "sweetalert2";

class ServiceController {

    constructor() {
        this.service = new Service();
    }

    async list(page, perPage = 10, previewType = "swal", responseType = "json", headers = null) {
        this.service.setPreviewType(previewType);
        this.service.setResponseType(responseType);
        this.service.setHeaders(headers);
        return await this.service.list(page, perPage);
    }

    async store(data, previewType = "swal", responseType = "json", headers = null) {
        this.service.setData(data);
        this.service.setPreviewType(previewType);
        this.service.setResponseType(responseType);
        this.service.setHeaders(headers);
        return await this.service.store();
    }

    async update(id, data, previewType = "swal", responseType = "json", headers = null) {
        this.service.setData(data);
        this.service.setPreviewType(previewType);
        this.service.setResponseType(responseType);
        this.service.setHeaders(headers);
        return await this.service.update(id);
    }

    async destroy(id, previewType = "swal", responseType = "json", headers = null) {
        this.service.setPreviewType(previewType);
        this.service.setResponseType(responseType);
        this.service.setHeaders(headers);
        return await this.service.delete(id);
    }

    async show(id, previewType = "swal", responseType = "json", headers = null) {
        this.service.setPreviewType(previewType);
        this.service.setResponseType(responseType);
        this.service.setHeaders(headers);
        return await this.service.show(id);
    }


    async showPreview(services, containerId = 'servicesContainer') {
        try {
            let servicesContainer = document.getElementById(containerId);
            if (!servicesContainer) {
                throw new Error('Container not found');

            }
            servicesContainer.innerHTML = ''
            if (services && services.length > 0 && typeof services.forEach === 'function') {
                services.forEach(service => {
                    this.append(service, servicesContainer)
                })
            }
                this.addItemCard(servicesContainer)
        } catch (e) {
            throw e;
        }
    }

    addItemCard(itemsContainer) {
        let card = new CardBuilder();
        card.setCardContainerClass(['col-md-3', 'col-sm-6', 'col-12', 'px-2', 'py-2'])

        card.setCardId('service-add');
        card.setCardClass(['h-100', 'custom-card', 'border-0', 'rounded-4', 'shadow-sm']);

        card.setBody(`

            <div class="card-body h-100 d-flex flex-column justify-content-center align-items-center" style="cursor: pointer;">
               <svg width="31" height="39" viewBox="0 0 31 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 8.8453V30.3269" stroke="#A3AED0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.9375 19.5861H7.0625" stroke="#A3AED0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <p class="text-muted">Add A New Service</p>
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

            card.setCardContainerId('service-' + item.id)
            card.setCardClass(['h-100', 'custom-card', 'border-0', 'rounded-4', 'shadow-sm']);
            let eyeStatus = ''
            if (item.status === 'active') {
                eyeStatus = 'fa fa-eye text-success'
            } else {
                eyeStatus = 'fa fa-eye-slash text-danger'
            }


            card.setBody(`

<div class="d-flex justify-content-center">
     <img  src="${item.cover_image}" class="mw-100 rounded-4" style="object-fit: scale-down" alt="...">
</div>
                <div class="position-absolute bg-light d-flex justify-content-center align-items-center" style="top: 20px;right: 25px;width: 30px;height: 30px;border-radius: 50%;">
                <i class="${eyeStatus}  " ></i>
                </div>
                <p class="card-heading card-name">${item.title}</p>


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
                            let response = await this.destroy(itemId, 'swal', 'json')
                            if (response.response.status === 200) {
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
            let item = document.getElementById('service-' + itemId);
            if (item) {
                itemsContainer.removeChild(item);
            }
        } catch (e) {
            throw e;
        }
    }

    async edit(id) {
        try {
            let item = await this.show(id, 'swal', 'json');


            let nameInput = document.querySelector('#editServiceForm input[name="name"]');
            let descriptionInput = document.querySelector('#editServiceForm textarea[name="description"]');
            let statusSelect = document.querySelector('#editServiceForm select[name="status"]');
            let idInput = document.querySelector('#editServiceForm input[name="id"]');


            if (item.response.data.status === 200) {
                console.log(item.response.data.data)


                var myModal = new bootstrap.Modal(document.getElementById('editServiceModal'));

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


                    let services = await this.list(prevPage, pagination.per_page, previewType, responseType);
                    if (services.response.status === 200) {
                        await this.showPreview(services.response.data.data.data);
                        await this.showPagination(services.response.data.data, 'pagination', callback);
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
                    let services = await this.list(i, pagination.per_page, previewType, responseType);
                    if (services.response.status === 200) {
                        await this.showPreview(services.response.data.data.data);
                        await this.showPagination(services.response.data.data, 'pagination');
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

                    let services = await this.list(nextPage, pagination.per_page, previewType, responseType);
                    if (services.response.status === 200) {
                        await this.showPreview(services.response.data.data.data);
                        await this.showPagination(services.response.data.data, 'pagination');
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


export default ServiceController
