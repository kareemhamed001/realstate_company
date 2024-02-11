import Project from "./api.js";
import CardBuilder from "../../../helpers/CardBuilder";
import routes from "@/routes";

class ProjectController {

    constructor() {
        this.project = new Project();
    }


    static showPreview(projects, containerId = 'projectsContainer') {
        try {
            let projectsContainer = document.getElementById(containerId);

            if (!projectsContainer)
                throw new Error('Project Container Not Found');

            projectsContainer.innerHTML = '';
            if (projects && projects.length > 0 && typeof projects.forEach === 'function') {
                projects.forEach((item, index) => {
                    if (index % 2 === 0) {

                        this.append(item, projectsContainer, 'LTR')
                    } else {
                        this.append(item, projectsContainer, 'RTL')
                    }
                })
            }

        } catch (e) {
            throw e;
        }
    }


    static append(item, itemsContainer, direction = 'LTR') {

        try {

            let projectItemContainer = document.createElement('div');
            projectItemContainer.classList.add('col-12', 'd-flex', 'flex-wrap', 'my-4', 'rounded');

            let projectItemImageContainer = document.createElement('div');
            projectItemImageContainer.classList.add('col-6');

            let projectItemImage = document.createElement('img');
            projectItemImage.classList.add('w-100', 'h-100', 'rounded');
            projectItemImage.style.objectFit = 'cover';
            projectItemImage.src = item.cover_image;
            projectItemImage.alt = '';
            projectItemImageContainer.appendChild(projectItemImage);


            let projectItemInfoContainer = document.createElement('div');
            projectItemInfoContainer.classList.add('col-6', 'px-3');

            let projectItemManagerInfoContainer = document.createElement('div');
            projectItemManagerInfoContainer.classList.add('d-flex', 'align-items-center', 'mb-2');

            let projectItemManagerImage = document.createElement('img');
            projectItemManagerImage.classList.add('mw-100','manager-image');
            projectItemManagerImage.src = item.manager_image;
            projectItemManagerImage.alt = '';

            let projectItemManagerName = document.createElement('h6');
            projectItemManagerName.classList.add('mx-2','manager-name');
            projectItemManagerName.innerText = item.manager;
            projectItemManagerInfoContainer.appendChild(projectItemManagerImage);
            projectItemManagerInfoContainer.appendChild(projectItemManagerName);
            projectItemInfoContainer.appendChild(projectItemManagerInfoContainer);

            let projectItemTypoContainer = document.createElement('div');
            projectItemTypoContainer.classList.add('mb-3');
            let projectItemName = document.createElement('h5');
            projectItemName.classList.add('project-item-title');
            projectItemName.innerText = item.name;

            let projectItemDescription = document.createElement('p');
            projectItemDescription.classList.add('project-item-description','my-2');
            projectItemDescription.innerText = item.description;
            projectItemTypoContainer.appendChild(projectItemName);
            projectItemTypoContainer.appendChild(projectItemDescription);
            projectItemInfoContainer.appendChild(projectItemTypoContainer);

            let projectItemPriceContainer = document.createElement('div');
            projectItemPriceContainer.classList.add('mb-4');
            let projectItemPrice = document.createElement('h6');
            projectItemPrice.classList.add('project-item-price');
            projectItemPrice.innerText = '$ ' + item.price;
            projectItemPriceContainer.appendChild(projectItemPrice);
            projectItemInfoContainer.appendChild(projectItemPriceContainer);

            let projectItemBtn = document.createElement('a');
            projectItemBtn.href = routes.client.web.project.show.url.replace('{project}', item.id);
            projectItemBtn.classList.add('project-item-btn');
            projectItemBtn.innerText = 'Read More';
            projectItemInfoContainer.appendChild(projectItemBtn);
            if (direction === 'LTR') {
                projectItemContainer.appendChild(projectItemImageContainer);
                projectItemContainer.appendChild(projectItemInfoContainer);
            } else {
                projectItemContainer.appendChild(projectItemInfoContainer);
                projectItemContainer.appendChild(projectItemImageContainer);
            }
            itemsContainer.appendChild(projectItemContainer);


        } catch (e) {
            throw e;
        }
    }


}


export default ProjectController
