import Package from "@/Api/Package/api";
import PackageUiController from "@/Dashboard/Services/Package/uiController";
import Swal from "sweetalert2";
import ExceptionHandler from "../../../helpers/ExceptionHandler.js";

let packageApi = new Package();
packageApi.setPreviewType('swal')
packageApi.setResponseType('json')

let packageUiController = new PackageUiController();

let addPackageForm = document.getElementById('addPackageForm');
let editPackageForm = document.getElementById('editPackageForm');
let perPageSelect = document.getElementById('perPage');

if (addPackageForm) {
    addPackageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let data = new FormData(addPackageForm);
        packageApi.setData(data)
        packageApi.setPreviewType('swal')
        packageApi.setResponseType('json')
        let response = await packageApi.store();
        await listPackages();
        Swal.fire(response.swalResponse);
    });
}

if (editPackageForm) {
    editPackageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let data = new FormData(editPackageForm);
        let id=data.get('id');
        packageApi.setData(data)
        let response = await packageApi.update(id);
        await listPackages();
        Swal.fire(response.swalResponse);
    });
}


let currentPage = 1;
let perPage=11
if (perPageSelect){
    perPage= perPageSelect.value;
    perPageSelect.addEventListener('change', async (e) => {
        perPage = e.target.value;
        await listPackages()
    })
}

function onPageChange(page) {
    console.log(page);
    currentPage = page;
}


async function listPackages() {
    try {
        let packages = await packageApi.list(currentPage, perPage);

        if (packages.response.status === 200) {
            console.log(packages.response.data.data.data);
            await packageUiController.showPreview(packages.response.data.data.data, 'packagesContainer');
            await packageUiController.showPagination(packages.response.data.data, 'pagination',onPageChange);

        }
    }catch (e) {
        console.log(e);
        ExceptionHandler(e)
    }

}

listPackages()


