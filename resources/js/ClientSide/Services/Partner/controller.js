import Partner from "./api.js";
import CardBuilder from "../../../helpers/CardBuilder";

class PartnerController {

    constructor() {
        this.partner = new Partner();
    }

    async list(page, perPage = 10, previewType = "swal", responseType = "json", headers = null) {
        this.partner.setPreviewType(previewType);
        this.partner.setResponseType(responseType);
        this.partner.setHeaders(headers);
        return await this.partner.list(page, perPage);
    }


    static showPreview(partners, containerId = 'partnersContainer') {
        try {
            let partnersContainer = document.getElementById(containerId);

            if (!partnersContainer)
                throw new Error('Partners Container not found')

            partnersContainer.innerHTML = '';

            if (partners && partners.length > 0 && typeof partners.forEach === 'function') {
                partners.forEach(partner => {
                    this.append(partner, partnersContainer)
                })
            }

        } catch (e) {
            throw e;
        }
    }

    static append(item, itemsContainer) {

        try {
            let uiItem=`

            <div class="col">
                <div class="partner-logo-container">
                    <img class="partner-image" src="${item.cover_image}" alt="">
                </div>

            </div>
            `

            itemsContainer.innerHTML += uiItem;

        } catch (e) {
            throw e;
        }
    }


}


export default PartnerController
