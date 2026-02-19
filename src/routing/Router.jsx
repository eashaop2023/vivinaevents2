
import { createBrowserRouter,Outlet } from "react-router-dom";
import App from "../App";
import Partner from "../headercomponent/Partner";
import Home from "../headercomponent/Home";
import OurJourney from '../headercomponent/OurJourney';
import ContactUs from "../headercomponent/ContactUs";
import Patent from "../footercomponent/Patent";
import PressandBlog from "../footercomponent/PressandBlog";
import Privacy from "../footercomponent/Privacy";
import Terms from "../footercomponent/Terms";
import Cookies from "../footercomponent/Cookies";
import GetApp from "../headercomponent/GetApp";
import ProShoot from "../headercomponent/ProShoot";
import Events from "../headercomponent/Events";
import Services from "../headercomponent/Services";
import Entertainment from "../servicescomponents/Entertainment";
import Catering from "../servicescomponents/Catering";
import Decor from "../servicescomponents/Decor";
import Wedding from "../eventcomponents/Wedding";
import Parties from "../eventcomponents/Parties";
import CorporateEvent from './../eventcomponents/CorporateEvent';
import Anniversary from './../eventcomponents/Anniversary';
import EventBookingPage from "../eventcomponents/EventBookingpage";
import PreWeddingEvents from './../eventcomponents/PreWeddingEvent';
import ProshootBookingPage from './../proshootcomponents/ProshootBookingPage';
import All from './../discovercomponents/All';
import EventandWedding from './../discovercomponents/EventandWedding';
import PreWedding from './../discovercomponents/PreWedding';
import Parties1 from './../discovercomponents/Parties1';
import Corporate from './../discovercomponents/Corporate';
import AnniversaryCelebrations from './../discovercomponents/AnniversaryCelebrations';
import Birthdays from './../discovercomponents/Birthdays';
import AllPhotos from './../discovercomponents/photogallarycomponents/AllPhotos';
import WeddingPhotos from './../discovercomponents/photogallarycomponents/WeddingPhotos';
import PartiesPhotos from './../discovercomponents/photogallarycomponents/PartiesPhotos';
import PreWeddingPhotos from './../discovercomponents/photogallarycomponents/PreWeddingPhotos';
import VivinaEventsVideos from './../discovercomponents/videogallarycomponents/VivinaEventsVideos';
import VivinaEventsPhotos from './../discovercomponents/photogallarycomponents/VivinaEventsPhotos';
import Decorandinteriors from './../discovercomponents/Decorandinteriors';
import ProShootVideos from "../discovercomponents/videogallarycomponents/ProShootVideos";
import ProShootPhotos from "../discovercomponents/photogallarycomponents/ProShootPhotos";
import WeddingEvent from "../servicescomponents/WeddingEvent";
import PreWeddingEventService from './../servicescomponents/PreWeddingEventService';
import PartiesServices from './../servicescomponents/PartiesServices';
import CorporateEventServices from './../servicescomponents/CorporateEventServices';
import AnniversaryServices from './../servicescomponents/AnniversaryServices';
import ProShootServices from "../servicescomponents/ProShootServices";
import CorporatePhotos from "../discovercomponents/photogallarycomponents/CorporatePhotos";
import AnniversaryPhotos from "../discovercomponents/photogallarycomponents/AnniversaryPhotos";
import WeddingPackageForm from "../eventcomponents/WeddingPackageForm";


export let routes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
                {
                index:true,
                element:<Home/>
                },
                {
                    path:"eventbooking",
                    element:<EventBookingPage/>
                },
                {
                    path:"proshootbooking",
                    element:<ProshootBookingPage/>
                },
                {
                    path:"knowmore",
                    element:<WeddingPackageForm/>
                },
                {
                    path:"partner",
                    element:<Partner/>
                },
                {
                    path:"proshoot",
                    element:<ProShoot/>
                },
                {
                    path:"ourjourney",
                    element:<OurJourney/>
                },
                {
                    path:"getapp",
                    element:<GetApp/>
                },
                {
                    path:"contactus",
                    element:<ContactUs/>
                },
                 // -----Footer-----------------
                {
                    path:"cookies",
                    element:<Cookies/>
                },
                {
                    path:"patent",
                    element:<Patent/>
                },
                {
                    path:"pressandblog",
                    element:<PressandBlog/>
                },
                {
                    path:"privacy",
                    element:<Privacy/>
                },
                {
                    path:"terms",
                    element:<Terms/>
                },
                // -----events-----------------
                {
                    path:"events",
                    element:<Events/>
                },
                 {
                    path:"/events/wedding",
                    element:<Wedding/>
                },
                 {
                    path:"/events/prewedding",
                    element:<PreWeddingEvents/>
                },
                 {
                    path:"/events/parties",
                    element:<Parties/>
                },
                 {
                    path:"/events/corporate",
                    element:<CorporateEvent/>
                },
                 {
                    path:"/events/anniversary",
                    element:<Anniversary/>
                },
                // ---------Services----------
                {
                    path:"services",
                    element:<Services/>,

                },
                {
                    path:"services/entertainment",
                    element:<Entertainment/>
                },
                {
                    path:"services/catering",
                    element:<Catering/>
                },
                {
                    path:"services/decor",
                    element:<Decor/>
                },
                {
                    path:"services/weddingevent",
                    element:<WeddingEvent/>
                },
                {
                    path:"services/preweddingevent",
                    element:<PreWeddingEventService/>
                },
                {
                    path:"services/partieservices",
                    element:<PartiesServices/>
                },
                {
                    path:"services/corporateservices",
                    element:<CorporateEventServices/>
                },
                {
                    path:"services/anniversaryservices",
                    element:<AnniversaryServices/>
                },
                {
                    path:"services/proshootservices",
                    element:<ProShootServices/>
                },
            // --------Gallaary/Discover----------------   
                {
                path: "discover",
                element: <Outlet/>,   // empty wrapper
                children: [
                    {
                    path: "videos",
                    element: <VivinaEventsVideos/>,   // Main video layout
                    children: [
                        { index: true, element: <All/>},
                        {path: "eventandwedding",element: <EventandWedding/>},
                        {path: "prewedding",element: <PreWedding/> },
                        {path: "proshoot",element: <ProShootVideos/> },
                        {path: "parties1",element: <Parties1/>},
                        { path: "corporation",element: <Corporate/>},
                        {path: "anniversarycle",element: <AnniversaryCelebrations />},
                        {path: "birthdays",element: <Birthdays/> },
                        { path: "decorandinteriors",element: <Decorandinteriors/>}
                    ]
                    },
                 {
                path: "photos",
                element: <VivinaEventsPhotos/>,//main photo layout
                children: [
                    { index: true, element: <AllPhotos/> },
                    { path: "wedding", element: <WeddingPhotos/> },
                    { path: "proshoot", element: <ProShootPhotos/> },
                    { path: "prewedding", element: <PreWeddingPhotos/> },
                    { path: "parties", element: <PartiesPhotos/> },
                    { path: "corporate", element:<CorporatePhotos/> },
                    { path: "anniversary", element: <AnniversaryPhotos/> },
                ],
                },  
                ]
                }
        ]
    }
])

