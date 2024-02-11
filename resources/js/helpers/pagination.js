// PaginationHelper.js
export default class PaginationHelper {
    constructor(itemsPerPage, totalItems, currentPage,lastPage, onPageChangeCallback) {
        this.itemsPerPage = itemsPerPage;
        this.totalItems = totalItems;
        this.currentPage = currentPage;
        this.lastPage = lastPage;
        this.onPageChangeCallback = onPageChangeCallback;
        this.totalPages = lastPage;
    }

    renderPagination() {
        const paginationContainer = document.createElement('ul');
        paginationContainer.classList.add('pagination');

        const prevButton = this.createPageButton('Previous', this.currentPage - 1);
        paginationContainer.appendChild(prevButton);

        for (let i = 1; i <= this.totalPages; i++) {
            const pageButton = this.createPageButton(i, i);
            paginationContainer.appendChild(pageButton);
        }

        const nextButton = this.createPageButton('Next', this.currentPage + 1);
        paginationContainer.appendChild(nextButton);

        return paginationContainer;
    }

    createPageButton(label, pageNumber) {
        const pageButton = document.createElement('li');
        pageButton.classList.add('page-item');
        if (pageNumber === this.currentPage) {
            pageButton.classList.add('active');
        }
        const link = document.createElement('a');
        link.classList.add('page-link');
        link.href = '#';
        link.textContent = label;

        // Disable the "Previous" and "Next" buttons if it's the first or last page
        if ((pageNumber === 0 && label === 'Previous') || (pageNumber > this.totalPages && label === 'Next')) {
            pageButton.classList.add('disabled');
        } else {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                this.onPageChangeCallback(pageNumber);
            });
        }

        pageButton.appendChild(link);

        return pageButton;
    }
}

