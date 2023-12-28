

class Request {
    constructor(url, method, data, headers, responseType,previewType='swal') {
        this.url = url;
        this.method = method;
        this.data = data;
        this.headers = headers;
        this.responseType = responseType;
        this.previewType = previewType;
    }

    send() {
        const axiosConfig = {
            method: this.method,
            url: this.url,
            data: this.data,
            headers: this.headers,
            responseType: this.responseType,
        };

        return axios(axiosConfig)
            .then(response => {
                if (this.previewType === 'swal') {
                    const swalResponse = {
                        title: 'Success!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    };

                    if (response.data.message) {
                        swalResponse.text = response.data.message;
                    }

                    return {
                        swalResponse: swalResponse,
                        response: response
                    };
                }

                return response;
            })
            .catch(error => {
                console.error(error.response.data.errors);

                if (this.previewType === 'swal') {
                    const swalResponse = {
                        title: 'Error!',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    };

                    if (error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const errorsHtml = Object.values(errors)
                            .map(value => `<li>${value}</li>`)
                            .join('');

                        swalResponse.html = errorsHtml;
                    } else {
                        swalResponse.text = error.response.data.message;
                    }

                    return {
                        swalResponse: swalResponse,
                        response: error.response
                    };
                }

                throw error;
            });
    }
}

class RequestBuilder {
    constructor(url=null, method=null, data=null, headers=null, responseType=null,previewType=null) {
        this.url = url;
        this.method = method;
        this.data = data;
        this.headers = headers;
        this.responseType = responseType;
        this.previewType = previewType;

    }

    setUrl(url) {
        this.url = url;
        return this;
    }

    setMethod(method) {
        this.method = method;
        return this;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    setHeaders(headers) {
        this.headers = headers;
        return this;
    }

    setResponseType(responseType) {
        this.responseType = responseType;
        return this;
    }

    setPreviewType(previewType) {
        this.previewType = previewType;
        return this;
    }
    build() {
        return new Request(this.url, this.method, this.data, this.headers, this.responseType,this.previewType);
    }
}

export default RequestBuilder;
