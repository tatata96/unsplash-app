# unsplash-app
**React app using Unsplash API </br>**
2 pages </br>Transition between pages are done with react-router-dom.</br>

Same SearchArea Component is used in both.</br>
SearchArea Component consists of logo, input areas and search button. Input elements are from Material-UI, other elements are images with onClick attributes.</br>
Dropdown Input's options are hardcoded.</br></br>
Home: </br>
![01](https://user-images.githubusercontent.com/53620159/133035795-4f110367-7b8f-4d9b-94b9-ef242f7939a1.png)

Search:</br>
![04](https://user-images.githubusercontent.com/53620159/133035883-a9d990e1-c82c-4d0b-93a1-356571b9a4a4.png)

</br>

**Search , Display**</br>

Clicking search button triggers fetchPhotos function in App.js where the get request to Unsplash api is performed.</br>
Depending on the retrieved data photos, currentPage, and totalResult states(in App.js) are set .</br>
Photos are passed down to Home to display them in a grid structure.</br></br>


**Pagination**</br>

Home page consists of SearchArea, images grid, pagination and modal for each image.</br>
Material UI is not used for pagination. CurrentPage and totalResults states are passed down from App(->Home->Pagination) in order manage pagination.</br>
Clicking a pagination button fires nextPage function,nextPage function makes a call to fecthPhotos in App.js to update images grid.</br></br>


**Modal , Map**</br>

Modal in Home is a Material-UI component. Modal displays  image and user information with a map. Image and user information is passed from App, this user information has location  as a string.</br>To create a googlemap langitude and latitude values of the location are required.</br>
This string location is passed down to Map Component and a get request to "https://maps.googleapis.com/maps/api/geocode"  is performed in order to retrieve
langitude and latitude values of the location. After fetching lat and long values, Map's state center is set(using lng and lat values), map is created and  marker is added .



