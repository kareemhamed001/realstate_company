import routes from "../routes.js";
import RequestBuilder from "../../requestBuilder.js";

class Service {
    constructor(data = {}, previewType = "swal", responseType = "json", headers = null) {
        this.data = data;
        this.previewType = previewType;
        this.responseType = responseType;
        this.headers = headers;
    }

    async list(page) {
        let request = new RequestBuilder()
            .setUrl(routes.service.list.url + "?page=" + page)
            .setMethod(routes.service.list.method)
            .setHeaders({'Accept': 'application/json'})
            .setResponseType(this.responseType)
            .setPreviewType(this.previewType)
            .build()
        return await request.send();
    }

    async store() {
        let request = new RequestBuilder()
            .setUrl(routes.service.store.url)
            .setMethod(routes.service.store.method)
            .setData(this.data)
            .setHeaders({'Accept': 'application/json'})
            .setResponseType(this.responseType)
            .setPreviewType(this.previewType)
            .build();
        return await request.send();
    }

    async update(id) {

        let request = new RequestBuilder()
            .setUrl(routes.service.update.url.replace("{service}", id))
            .setMethod(routes.service.update.method)
            .setData(this.data)
            .setHeaders(this.headers)
            .setResponseType(this.responseType)
            .setPreviewType(this.previewType)
            .build();
        return await request.send();

    }

    async delete(id) {
        let request = new RequestBuilder()
            .setUrl(routes.service.destroy.url.replace("{service}", id))
            .setMethod(routes.service.destroy.method)
            .setHeaders({'Accept': 'application/json'})
            .setResponseType(this.responseType)
            .setPreviewType(this.previewType)
            .build();

        return await request.send();
    }

    async show(id) {
        let request = new RequestBuilder()
            .setUrl(routes.service.show.url.replace("{service}", id))
            .setMethod(routes.service.show.method)
            .setHeaders({'Accept': 'application/json'})
            .setResponseType(this.responseType)
            .setPreviewType(this.previewType)
            .build();

        return await request.send();

    }


}

export default Service
