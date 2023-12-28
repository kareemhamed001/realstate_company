import Service from "./api.js";
import PaginationHelper from "../../pagination.js";


const itemsPerPage = 10; // Adjust as needed
let currentPage = 1;
async function onPageChange(page) {
    currentPage = page;
    await fetchData();
};


const serviceContainer = document.getElementById('service-container');
const serviceTable = document.getElementById('service-table');
const serviceTableBody = document.getElementById('service-table-body');
const serviceTablePaginationContainer = document.getElementById('service-table-pagination-container');

async function fetchData() {

    let service = new Service();

    let response = await service.list(currentPage)

    await appendServices(response.response.data.data.data);

    const paginationHelper = new PaginationHelper(itemsPerPage, response.response.data.data.total, currentPage, response.response.data.data.last_page, onPageChange);
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';
    paginationContainer.appendChild(paginationHelper.renderPagination());

}


function appendServices(services) {

    const citiesTableBody = document.getElementById("citiesTableBody");
    citiesTableBody.innerHTML = "";
    services.forEach(city => {
        const cityRow = document.createElement("tr");
        cityRow.id = "city-" + city.id;
        cityRow.innerHTML = `
                    <td>${city.id}</td>
                    <td>${city.name}</td>
                    <td>${city.created_at}</td>

                    <td>
                         <button class="btn btn-primary btn-sm" onclick="showCity(${city.id})">
                            <i class="fas fa-edit"></i>
                            Edit
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="deleteCity(${city.id})">
                            <i class="fas fa-trash"></i>
                            Delete
                        </button>
                    </td>
                `;

        citiesTableBody.appendChild(cityRow);
    });
}
