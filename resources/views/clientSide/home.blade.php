<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <meta name="description" content="">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    @vite(['resources/js/ClientSide/main.js','resources/SCSS/custom/ClientSide/styles.scss'])
    <style>

    </style>
</head>
<body>

<div class="w-100 h-100 bg-white position-fixed" id="loader">
    <div class="spinner-grow" role="status">
        <span class="visually-hidden"></span>
    </div>
</div>


<section id="cover-section">

    <header id="header">
        <nav id="upper-header">
            <a class="d-flex align-items-center link" href="javascript:void(0)" id="email-container">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.5 10.5V21.875C3.5 22.1071 3.59219 22.3296 3.75628 22.4937C3.92038 22.6578 4.14294 22.75 4.375 22.75H23.625C23.8571 22.75 24.0796 22.6578 24.2437 22.4937C24.4078 22.3296 24.5 22.1071 24.5 21.875V10.5L14 3.5L3.5 10.5Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.0859 16.625L3.77344 22.4984" stroke="white" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M24.2266 22.4984L15.9141 16.625" stroke="white" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M24.5 10.5L15.9141 16.625H12.0859L3.5 10.5" stroke="white" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="mx-2">
                Email us at:
            </span>
                <span id="email-span">khidmt55@gmail.com</span>
            </a>

            <div id="upper-header-icons">


                <svg class="header-icon" width="18" height="20" viewBox="0 0 18 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.2686 0.724609H10.3607C8.63501 0.724609 6.71559 1.4646 6.71559 4.01496C6.72401 4.9036 6.71559 5.75466 6.71559 6.71247H4.71924V9.95142H6.77737V19.2758H10.5593V9.88989H13.0555L13.2813 6.70338H10.4941C10.4941 6.70338 10.5004 5.28589 10.4941 4.87424C10.4941 3.8664 11.5227 3.92411 11.5846 3.92411C12.074 3.92411 13.0257 3.92557 13.27 3.92411V0.724609H13.2686Z"
                        fill="white"/>
                </svg>


                <svg class="header-icon" width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.14651 9.00008C6.14651 7.42391 7.42391 6.14582 9.00008 6.14582C10.5763 6.14582 11.8543 7.42391 11.8543 9.00008C11.8543 10.5763 10.5763 11.8543 9.00008 11.8543C7.42391 11.8543 6.14651 10.5763 6.14651 9.00008ZM4.60354 9.00008C4.60354 11.4283 6.57185 13.3966 9.00008 13.3966C11.4283 13.3966 13.3966 11.4283 13.3966 9.00008C13.3966 6.57185 11.4283 4.60354 9.00008 4.60354C6.57185 4.60354 4.60354 6.57185 4.60354 9.00008ZM12.5432 4.42925C12.5432 4.99637 13.0031 5.45698 13.5709 5.45698C14.138 5.45698 14.5986 4.99637 14.5986 4.42925C14.5986 3.86213 14.1387 3.40221 13.5709 3.40221C13.0031 3.40221 12.5432 3.86213 12.5432 4.42925ZM5.54066 15.9694C4.70589 15.9314 4.2522 15.7924 3.95066 15.6748C3.55091 15.5192 3.26597 15.3338 2.96581 15.0343C2.66635 14.7349 2.4803 14.4499 2.32538 14.0502C2.20781 13.7487 2.0688 13.295 2.03076 12.4602C1.98926 11.5576 1.98096 11.2865 1.98096 9.00008C1.98096 6.71363 1.98995 6.44321 2.03076 5.53997C2.0688 4.7052 2.2085 4.2522 2.32538 3.94997C2.48099 3.55022 2.66635 3.26528 2.96581 2.96512C3.26528 2.66565 3.55022 2.47961 3.95066 2.32469C4.2522 2.20712 4.70589 2.06811 5.54066 2.03007C6.44321 1.98857 6.71432 1.98027 9.00008 1.98027C11.2865 1.98027 11.557 1.98926 12.4602 2.03007C13.295 2.06811 13.748 2.20781 14.0502 2.32469C14.4499 2.47961 14.7349 2.66565 15.035 2.96512C15.3345 3.26459 15.5199 3.55022 15.6755 3.94997C15.793 4.25151 15.9321 4.7052 15.9701 5.53997C16.0116 6.44321 16.0199 6.71363 16.0199 9.00008C16.0199 11.2858 16.0116 11.557 15.9701 12.4602C15.9321 13.295 15.7924 13.7487 15.6755 14.0502C15.5199 14.4499 15.3345 14.7349 15.035 15.0343C14.7356 15.3338 14.4499 15.5192 14.0502 15.6748C13.7487 15.7924 13.295 15.9314 12.4602 15.9694C11.5576 16.0109 11.2865 16.0192 9.00008 16.0192C6.71432 16.0192 6.44321 16.0109 5.54066 15.9694V15.9694ZM5.47012 0.489859C4.55858 0.531355 3.93614 0.675901 3.39184 0.887533C2.82887 1.10608 2.35166 1.39932 1.87515 1.87515C1.39932 2.35097 1.10608 2.82818 0.887533 3.39184C0.675901 3.93614 0.531355 4.55858 0.489859 5.47012C0.447671 6.38304 0.437988 6.6749 0.437988 9.00008C0.437988 11.3253 0.447671 11.6171 0.489859 12.53C0.531355 13.4416 0.675901 14.064 0.887533 14.6083C1.10608 15.1713 1.39863 15.6492 1.87515 16.125C2.35097 16.6008 2.82818 16.8934 3.39184 17.1126C3.93683 17.3243 4.55858 17.4688 5.47012 17.5103C6.38373 17.5518 6.6749 17.5622 9.00008 17.5622C11.326 17.5622 11.6171 17.5525 12.53 17.5103C13.4416 17.4688 14.064 17.3243 14.6083 17.1126C15.1713 16.8934 15.6485 16.6008 16.125 16.125C16.6008 15.6492 16.8934 15.1713 17.1126 14.6083C17.3243 14.064 17.4695 13.4416 17.5103 12.53C17.5518 11.6164 17.5615 11.3253 17.5615 9.00008C17.5615 6.6749 17.5518 6.38304 17.5103 5.47012C17.4688 4.55858 17.3243 3.93614 17.1126 3.39184C16.8934 2.82887 16.6008 2.35166 16.125 1.87515C15.6492 1.39932 15.1713 1.10608 14.609 0.887533C14.064 0.675901 13.4416 0.530664 12.5307 0.489859C11.6178 0.448362 11.326 0.437988 9.00077 0.437988C6.6749 0.437988 6.38373 0.447671 5.47012 0.489859"
                        fill="white"/>
                </svg>

                <div class="vl header-icon">
                </div>

                <svg class="header-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.67187 11.7C9.44364 13.2938 10.7324 14.5792 12.3281 15.3469C12.4458 15.4026 12.576 15.4268 12.7059 15.4169C12.8358 15.407 12.9608 15.3635 13.0687 15.2907L15.4125 13.725C15.516 13.6548 15.6357 13.6119 15.7603 13.6005C15.8849 13.589 16.0104 13.6093 16.125 13.6594L20.5125 15.5438C20.6625 15.6062 20.7877 15.7162 20.869 15.8568C20.9504 15.9974 20.9832 16.1608 20.9625 16.3219C20.8234 17.4073 20.2937 18.4048 19.4723 19.1278C18.6509 19.8508 17.5943 20.2498 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1246 3.75 10.8815 3.75 7.50003C3.75025 6.40578 4.1492 5.34911 4.87221 4.52774C5.59522 3.70637 6.59274 3.17659 7.67812 3.03753C7.83922 3.01684 8.00266 3.04967 8.14326 3.13099C8.28386 3.2123 8.39384 3.33758 8.45625 3.48753L10.3406 7.88441C10.3896 7.99723 10.4101 8.12038 10.4003 8.24299C10.3905 8.36561 10.3507 8.48393 10.2844 8.58753L8.71875 10.9688C8.64905 11.0765 8.60814 11.2003 8.59993 11.3283C8.59172 11.4563 8.61649 11.5843 8.67187 11.7V11.7Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a class="link">+201021638451</a>


            </div>

        </nav>
        <hr>
        <nav class="navbar " id="lower-header">
            <div class="d-flex d-lg-block justify-content-between ">
                <a href="" class="link d-flex align-items-center " id="logo">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M37.125 37.125V19.8516C37.1219 19.6613 37.0808 19.4735 37.0041 19.2994C36.9273 19.1252 36.8165 18.9682 36.6781 18.8375L22.9281 6.34219C22.6746 6.1103 22.3435 5.98169 22 5.98169C21.6565 5.98169 21.3254 6.1103 21.0719 6.34219L7.32187 18.8375C7.18351 18.9682 7.07269 19.1252 6.99595 19.2994C6.9192 19.4735 6.87808 19.6613 6.875 19.8516V37.125"
                            stroke="#EDEFF6" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.75 37.125H41.25" stroke="#EDEFF6" stroke-width="2.75" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path
                            d="M26.125 37.125V27.5C26.125 27.1353 25.9801 26.7856 25.7223 26.5277C25.4644 26.2699 25.1147 26.125 24.75 26.125H19.25C18.8853 26.125 18.5356 26.2699 18.2777 26.5277C18.0199 26.7856 17.875 27.1353 17.875 27.5V37.125"
                            stroke="#EDEFF6" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <div class="d-flex flex-column justify-content-start align-items-start mx-2">
                        <div class="fw-700 fs-24">HML Home</div>
                        <div class="fs-15">Real State Broker L.L.C</div>
                    </div>
                </a>

            </div>

            <nav class="d-flex align-items-center justify-content-center mx-auto  ">

                <div class=" " >

                    <a class="link mx-1 mx-sm-2 mx-md-2 mx-lg-3 active" href="#cover-section">Home</a>
                    <a class="link mx-1 mx-sm-2 mx-md-2 mx-lg-3" href="#services-section">Services</a>
                    <a class="link mx-1 mx-sm-2 mx-md-2 mx-lg-3" href="#gallery-section">Gallery</a>
                    <a class="link mx-1 mx-sm-2 mx-md-2 mx-lg-3" href="#packages-section">Packages</a>
                    <a class="link mx-1 mx-sm-2 mx-md-2 mx-lg-3" href="#feedback-section">Feedback</a>
                    <a class="link mx-1 mx-sm-2 mx-md-2 mx-lg-3" href="#about-section">About Us</a>
                    <a class="link mx-1 mx-sm-2 mx-md-2 mx-lg-3" href="#Partners-section">Partners</a>
                    <a class="link mx-1 mx-sm-2 mx-md-2 mx-lg-3" href="#contact-section">Contact</a>
                </div>
            </nav>

        </nav>
    </header>

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" id="coverImagesContainer">
        </div>
    </div>
    <div class="overlay">
    </div>


    <div class="contact-container ">
        <h1 class="contact-form-title-black">Find Your</h1>
        <h1 class="contact-form-title-yellow">Dream Home</h1>
        <form action="" id="contactForm">
            <div class="my-3">
                <input type="email" class="contact-input" placeholder="Enter Your Email">

            </div>

            <div class="my-3">
                <input type="text" class="contact-input" placeholder="Enter Your Phone">
            </div>

            <div class="my-3 d-flex justify-content-center">
                <button class=" contact-btn">Register Now</button>
            </div>
        </form>
    </div>
</section>

<div class="container">

    <div id="services-section" class="my-3 row container">
        <div class="section-typo-container">
            <h3 class="section-title">
                Services
            </h3>

        </div>

        <div class="row justify-content-center" id="services-container">

        </div>
    </div>

    <div id="gallery-section" class="my-3 row container">
        <div class="section-typo-container">
            <h3 class="section-title">
                OFF Plan Projects
            </h3>
            <p class="section-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
        </div>

        <div class="row justify-content-center" id="gallery-container">
        </div>
        <div class="d-flex justify-content-center align-items-center mt-4">

            <button class="btn rounded-0 shadow-sm p-2 bg-light mx-2" style="cursor: pointer" id="gallery-arrow-left">
                <i class="fas fa-arrow-left " id="gallery-left-arrow"></i>
            </button>
            <button class="btn rounded-0 shadow-sm p-2 bg-light mx-2" style="cursor: pointer" id="gallery-arrow-right">
                <i class="fas fa-arrow-right " id="gallery-right-arrow"></i>
            </button>

        </div>
    </div>

    <div id="package-section" class="my-3 row container">
        <div class="section-typo-container">
            <h3 class="section-title">
                Exclusive properties
            </h3>
            <p class="section-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
        </div>

        <div class="row justify-content-center" id="packages-container">

        </div>
        <div class="d-flex justify-content-center align-items-center mt-5">

            <button class="see-all-btn" style="cursor: pointer" id="gallery-arrow-left">
                See all properties
            </button>


        </div>
    </div>


    <div id="package-section" class="my-3 row ">
        <div class="section-typo-container">
            <h3 class="section-title">
                Why we invest in Dubai ?
            </h3>
        </div>

        <div class="" >
            <div class="dubai-container">
                <img class="w-100"  src="{{asset('assets/dubai.png')}}" alt="">
            </div>

            <div class="d-flex flex-wrap flex-row mt-5 px-5">
                <div class="col-md-4 p-4">
                    <div class=" d-flex flex-column justify-content-center align-items-center">

                        <img class="mw-100" style="object-fit: contain" src="{{asset('assets/32.png')}}" alt="">

                        <h5 class="dubai-service-title">
                            Sell your home
                        </h5>
                    </div>
                </div>
                <div class="col-md-4 p-4">
                    <div class=" d-flex flex-column justify-content-center align-items-center">

                        <img class="mw-100" style="object-fit: contain" src="{{asset('assets/33.png')}}" alt="">

                        <h5 class="dubai-service-title">
                            Sell your home
                        </h5>
                    </div>
                </div>

                <div class="col-md-4 p-4">
                    <div class=" d-flex flex-column justify-content-center align-items-center">

                        <img class="mw-100" style="object-fit: contain" src="{{asset('assets/34.png')}}" alt="">

                        <h5 class="dubai-service-title">
                            Sell your home
                        </h5>
                    </div>
                </div>
                <div class="col-md-4 p-4">
                    <div class=" d-flex flex-column justify-content-center align-items-center">

                        <img class="mw-100" style="object-fit: contain" src="{{asset('assets/35.png')}}" alt="">

                        <h5 class="dubai-service-title">
                            Sell your home
                        </h5>
                    </div>
                </div>
                <div class="col-md-4 p-4">
                    <div class=" d-flex flex-column justify-content-center align-items-center">

                        <img class="mw-100" style="object-fit: contain" src="{{asset('assets/36.png')}}" alt="">

                        <h5 class="dubai-service-title">
                            Sell your home
                        </h5>
                    </div>
                </div>
                <div class="col-md-4 p-4">
                    <div class=" d-flex flex-column justify-content-center align-items-center">

                        <img class="mw-100" style="object-fit: contain" src="{{asset('assets/37.png')}}" alt="">

                        <h5 class="dubai-service-title">
                            Sell your home
                        </h5>
                    </div>
                </div>




            </div>
        </div>

    </div>

</div>


<!-- Modal -->
<div class="modal modal-xl fade" id="galleryModal" tabindex="-1" aria-labelledby="galleryModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="galleryModalLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div id="modalCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">

                    </div>
                    <div class="carousel-inner">

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="modal-description">

                </div>
            </div>
        </div>
    </div>
</div>


@vite(['resources/js/ClientSide/main.js'])


</body>
</html>
