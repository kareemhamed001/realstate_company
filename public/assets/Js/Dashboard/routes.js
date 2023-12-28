const routes = {
    service: {
        list: {
            url: '/dashboard/api/services',
            method: 'get'
        },
        store: {
            url: '/dashboard/api/services',
            method: 'post'
        },
        show: {
            url: '/dashboard/api/services/{service}',
            method: 'get'
        },
        update: {
            url: '/dashboard/api/services/{service}',
            method: 'put'
        },
        destroy: {
            url: '/dashboard/api/services/{service}',
            method: 'delete'
        },
        gallery: {
            list: {
                url: '/dashboard/api/galleries',
                method: 'get'
            },

            store: {
                url: '/dashboard/api/galleries',
                method: 'post'
            },
            show: {
                url: '/dashboard/api/galleries/{galleries}',
                method: 'get'

            },

            update: {
                url: '/dashboard/api/galleries/{galleries}',
                method: 'put'
            },
            destroy: {
                url: '/dashboard/api/galleries/{galleries}',
                method: 'delete'
            },
        },
        package: {
            list: {
                url: '/dashboard/api/packages',
                method: 'get'
            },

            store: {
                url: '/dashboard/api/packages',
                method: 'post'
            },
            show: {
                url: '/dashboard/api/packages/{packages}',
                method: 'get'

            },
            update: {
                url: '/dashboard/api/packages/{packages}',
                method: 'put'
            },
            destroy: {
                url: '/dashboard/api/packages/{packages}',
                method: 'delete'
            }
        },
        setting: {
            list: {
                url: '/dashboard/api/settings',
                method: 'get'
            },
            store: {
                url: '/dashboard/api/settings',
                method: 'post'
            },
            show: {
                url: '/dashboard/api/settings/{settings}',
                method: 'get'
            },
            update: {
                url: '/dashboard/api/settings/{settings}',
                method: 'put'
            },
            destroy: {
                url: '/dashboard/api/settings/{settings}',
                method: 'delete'
            }
        },
        partner: {
            list: {
                url: '/dashboard/api/partners',
                method: 'get'
            },
            store: {
                url: '/dashboard/api/partners',
                method: 'post'
            },
            show: {
                url: '/dashboard/api/partners/{partners}',
                method: 'get'
            },
            update: {
                url: '/dashboard/api/partners/{partners}',
                method: 'put'
            },
            destroy: {
                url: '/dashboard/api/partners/{partners}',
                method: 'delete'
            }
        },
        feedback: {
            list: {
                url: '/dashboard/api/feedbacks',
                method: 'get'
            },
            store: {
                url: '/dashboard/api/feedbacks',
                method: 'post'
            },
            show: {
                url: '/dashboard/api/feedbacks/{feedbacks}',
                method: 'get'
            },
            update: {
                url: '/dashboard/api/feedbacks/{feedbacks}',
                method: 'put'
            },
            destroy: {
                url: '/dashboard/api/feedbacks/{feedbacks}',
                method: 'delete'
            }
        }
    }
}

export default routes
