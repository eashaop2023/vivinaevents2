import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/photos/logo.png"
import MenuIcon from "@mui/icons-material/Menu";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);
  const [eventAnchor, setEventAnchor] = useState(null);
  const [openServices, setOpenServices] = useState(false);
  const [serviceAnchor, setServiceAnchor] = useState(null);//dropdown 
  const [discoverAnchor, setDiscoverAnchor] = useState(null);
  const [openDiscover, setOpenDiscover] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  // 🔹 ADD – event dropdown data
  const eventMenu = [
    { label: "Wedding", path: "/events/wedding" },
    { label: "Pre-Wedding", path: "/events/prewedding" },
    { label: "Parties", path: "/events/parties" },
    { label: "Corporate Events", path: "/events/corporate" },
    { label: "Anniversary Celebration", path: "/events/anniversary" },
  ];

  // 🔹 ADD – services dropdown data
    const servicesMenu = [
      { label: "Entertainment", path: "/services/entertainment" },
      { label: "Catering", path: "/services/catering" },
      { label: "Decor", path: "/services/decor" },
      { label: "ProShoot", path: "/services/proshootservices" },
      { label: "Wedding Event", path: "/services/weddingevent" },
      { label: "PreWedding", path: "/services/preweddingevent" },
      { label: "Parties", path: "/services/partieservices" },
      { label: "Corporant Events", path: "/services/corporateservices" },
      { label: "Anniversary Celebration", path: "/services/anniversaryservices" },
    ];

    // 🔹 DISCOVER DROPDOWN DATA
      const discoverMenu = [
        { label: "Photos", path: "/discover/photos" },
        { label: "Videos", path: "/discover/videos" },
      ];
  // const getIconColor = (path) => {
  //   return location.pathname === path ? "red" : "white";
  // };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          left: 0,
          background:"linear-gradient(to bottom right, #2b0006, #4b000a, #430b0b)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            // width: "100%",
            minHeight: "56px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >

          <Box sx={{ display: "flex", alignItems: "center", gap: 1,
            padding:"6px 30px", border:"none",cursor: "pointer"
           }}>
            {isMobile && (
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <img src={logo} alt="Vivina Event's" style={{ height: "70px", objectFit: "contain",
               filter:"brightness(0) invert(1)",}}/>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2,ml: { md: "40px", lg: "160px" },}} >
              <Button onClick={() => navigate("/")}
                sx={{
                  color: location.pathname === "/" ? "red" : "white",
                  textTransform: "none",
                  fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
                }}>Home
              </Button>
               {/* 🔹 EVENTS BUTTON + DROPDOWN (ONLY ADDITION) */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* Events page open */}
                <Button
                  onClick={() => navigate("/events")}
                  sx={{
                    color: location.pathname.startsWith("/events")
                      ? "red"
                      : "white",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "18px",
                  }}
                >
                  Events
                </Button>

                {/* Dropdown arrow */}
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEventAnchor(e.currentTarget);
                  }}
                  sx={{ color: "white" }}
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Box>

               {/* 🔹 EVENTS DROPDOWN */}
              <Menu
                anchorEl={eventAnchor}
                open={Boolean(eventAnchor)}
                onClose={() => setEventAnchor(null)}
                sx={{
                  mt: 1,
                  "& .MuiPaper-root": {
                    width: "260px",
                    borderRadius: "6px",
                  },
                }}
              >
                {eventMenu.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => {
                      navigate(item.path);
                      setEventAnchor(null);
                    }}
                    sx={{ py: 1.2, fontSize: "16px" }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>

              <Button onClick={() => navigate("/proshoot")}
                sx={{
                  color: location.pathname === "/proshoot" ? "red" : "white",
                  textTransform: "none",
                  fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
                }}> ProShoot
              </Button>

              {/* 🔹 SERVICES BUTTON + DROPDOWN */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Services page open */}
            <Button
              onClick={() => navigate("/services")}
              sx={{
                color: location.pathname.startsWith("/services")
                  ? "red"
                  : "white",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Services
            </Button>

            {/* Dropdown arrow */}
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setServiceAnchor(e.currentTarget);
              }}
              sx={{ color: "white" }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>

          {/* 🔹 SERVICES DROPDOWN MENU */}
          <Menu
            anchorEl={serviceAnchor}
            open={Boolean(serviceAnchor)}
            onClose={() => setServiceAnchor(null)}
            sx={{
              mt: 1,
              "& .MuiPaper-root": {
                width: "260px",
                borderRadius: "6px",
              },
            }}
          >
            {servicesMenu.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setServiceAnchor(null);
                }}
                sx={{ py: 1.2, fontSize: "16px" }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>

              {/* <Button onClick={() => navigate("/discover")}
                sx={{
                  color: location.pathname === "/discover" ? "red" : "white",
                  textTransform: "none",
                  fontWeight: 500, fontSize: "18px", letterSpacing: "0.5px",       
                }}>Discover
              </Button> */}

              {/* 🔹 DISCOVER BUTTON + DROPDOWN */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* Discover main button (no action) */}
                    <Button
                      onClick={() => {}}
                      sx={{
                        color: location.pathname.startsWith("/discover")
                          ? "red"
                          : "white",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "18px",
                      }}
                    >
                      Discover
                    </Button>

                    {/* Dropdown arrow */}
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDiscoverAnchor(e.currentTarget);
                      }}
                      sx={{ color: "white" }}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </Box>
                    <Menu
                  anchorEl={discoverAnchor}
                  open={Boolean(discoverAnchor)}
                  onClose={() => setDiscoverAnchor(null)}
                  sx={{
                    mt: 1,
                    "& .MuiPaper-root": {
                      width: "220px",
                      borderRadius: "6px",
                    },
                  }}
                >
                  {discoverMenu.map((item) => (
                    <MenuItem
                      key={item.label}
                      onClick={() => {
                        navigate(item.path);
                        setDiscoverAnchor(null);
                      }}
                      sx={{ py: 1.2, fontSize: "16px" }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>


              <Button onClick={() => navigate("/partner")}
                sx={{
                  color: location.pathname === "/partner" ? "red" : "white",
                  textTransform: "none",
                  fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
                }}>Partner
              </Button>
              <Button onClick={() => navigate("/ourjourney")}
                sx={{
                  color: location.pathname === "/ourjourney" ? "red" : "white",
                  textTransform: "none",
                  fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
                }}>AboutUs
              </Button>
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Button
                variant="outlined"
                startIcon={<SmartphoneIcon />}
                onClick={() => navigate("/getapp")}
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  borderRadius: "20px",
                  textTransform: "none",
                }}
              >
                Get App
              </Button>

              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  background:"rgb(250, 10, 10)",
                  borderRadius: "15px",
                  textTransform: "none",
                }}
                onClick={() => navigate("/contactus")}
              >
                Contact Us            
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
{/* -----MOBILE DRAWER -------*/}
    
      <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          transitionDuration={400}
          PaperProps={{
            sx: {
              top: "56px",
              height: "calc(100% - 56px)",
            },
          }}
        >
          <Box sx={{ width: 250 }}>
            <List>

              {/* HOME */}
              <ListItem
                button
                onClick={() => {
                  navigate("/");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Home" />
              </ListItem>

              {/* EVENTS WITH DROPDOWN */}
              <ListItem
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* EVENTS PAGE */}
          <ListItemText
            primary="Events"
            onClick={() => {
              navigate("/events");
              setOpen(false);
            }}
            sx={{ cursor: "pointer" }}
          />

          {/* DROPDOWN ARROW */}
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setOpenEvents(!openEvents);
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </ListItem>


              {/* EVENTS SUB MENU */}
                {openEvents &&
          eventMenu.map((item) => (
            <ListItem
              key={item.label}
              button
              sx={{ pl: 4 }}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
                setOpenEvents(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
        ))}

              {/* OTHER MENU ITEMS */}
              <ListItem
                button
                onClick={() => {
                  navigate("/proshoot");
                  setOpen(false);
                }}
              >
                <ListItemText primary="ProShoot" />
              </ListItem>

            {/* SERVICES WITH DROPDOWN */}
            <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
              {/* SERVICES PAGE */}
              <ListItemText
                primary="Services"
                onClick={() => {
                  navigate("/services");
                  setOpen(false);
                }}
                sx={{ cursor: "pointer" }}
              />

              {/* DROPDOWN ARROW */}
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenServices(!openServices);
                }}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </ListItem>

            {/* SERVICES SUB MENU */}
            {openServices &&
              servicesMenu.map((item) => (
                <ListItem
                  key={item.label}
                  button
                  sx={{ pl: 4 }}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                    setOpenServices(false);
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
            ))}

              {/* <ListItem
                button
                onClick={() => {
                  navigate("/discover");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Discover" />
              </ListItem> */}

              {/* DISCOVER WITH DROPDOWN */}
                {/* DISCOVER WITH DROPDOWN */}
<ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
  <ListItemText
    primary="Discover"
    onClick={() => {
      setOpenDiscover(!openDiscover);
    }}
    sx={{ cursor: "pointer" }}
  />

  <IconButton
    size="small"
    onClick={(e) => {
      e.stopPropagation();
      setOpenDiscover(!openDiscover);
    }}
  >
    <KeyboardArrowDownIcon />
  </IconButton>
</ListItem>

{/* DISCOVER SUB MENU */}
{openDiscover &&
  discoverMenu.map((item) => (
    <ListItem
      key={item.label}
      button
      sx={{ pl: 4 }}
      onClick={() => {
        navigate(item.path);
        setOpen(false);
        setOpenDiscover(false);
      }}
    >
      <ListItemText primary={item.label} />
    </ListItem>
))}



              <ListItem
                button
                onClick={() => {
                  navigate("/partner");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Partner" />
              </ListItem>

              <ListItem
                button
                onClick={() => {
                  navigate("/ourjourney");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Our Journey" />
              </ListItem>
            </List>

            {/* BOTTOM BUTTONS */}
            <Box sx={{ p: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<SmartphoneIcon />}
                sx={{ mb: 1 }}
                onClick={() => {
                  navigate("/getapp");
                  setOpen(false);
                }}
              >
                Get App
              </Button>

              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  navigate("/contactus");
                  setOpen(false);
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Drawer>

    </>
  );
};
export default Header;







// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   IconButton,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
// } from "@mui/material";

// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/photos/logo.png"
// import MenuIcon from "@mui/icons-material/Menu";
// import SmartphoneIcon from "@mui/icons-material/Smartphone";

// const Header = () => {
//   const isMobile = useMediaQuery("(max-width:900px)");
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const toggleDrawer = (state) => () => {
//     setOpen(state);
//   };

//   const getIconColor = (path) => {
//     return location.pathname === path ? "red" : "white";
//   };

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           width: "100%",
//           left: 0,
//           background:"linear-gradient(to bottom right, #2b0006, #4b000a, #430b0b)",
//           boxShadow: "none",
//         }}
//       >
//         <Toolbar
//           sx={{
//             // width: "100%",
//             minHeight: "56px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >

//           <Box sx={{ display: "flex", alignItems: "center", gap: 1,
//             padding:"6px 30px", border:"none",cursor: "pointer"
//            }}>
//             {isMobile && (
//               <IconButton color="inherit" onClick={toggleDrawer(true)}>
//                 <MenuIcon />
//               </IconButton>
//             )}

//             <img src={logo} alt="Vivina Event's" style={{ height: "70px", objectFit: "contain",
//                filter:"brightness(0) invert(1)",}}/>
//           </Box>

//           {!isMobile && (
//             <Box sx={{ display: "flex", gap: 2,ml: { md: "40px", lg: "160px" },}} >
//               <Button onClick={() => navigate("/")}
//                 sx={{
//                   color: location.pathname === "/" ? "red" : "white",
//                   textTransform: "none",
//                   fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
//                 }}>Home
//               </Button>
//               <Button onClick={() => navigate("/events")}
//                 sx={{
//                   color: location.pathname === "/events" ? "red" : "white",
//                   textTransform: "none",
//                   fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
//                 }}>Events
//               </Button>
//               <Button onClick={() => navigate("/proshoot")}
//                 sx={{
//                   color: location.pathname === "/proshoot" ? "red" : "white",
//                   textTransform: "none",
//                   fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
//                 }}> ProShoot
//               </Button>
//               <Button onClick={() => navigate("/services")}
//                   sx={{
//                     color: location.pathname === "/services" ? "red" : "white",
//                     textTransform: "none",
//                     fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
//                   }}>Services
//               </Button>
//               <Button onClick={() => navigate("/discover")}
//                 sx={{
//                   color: location.pathname === "/discover" ? "red" : "white",
//                   textTransform: "none",
//                   fontWeight: 500, fontSize: "18px", letterSpacing: "0.5px",       
//                 }}>Discover
//               </Button>
//               <Button onClick={() => navigate("/partner")}
//                 sx={{
//                   color: location.pathname === "/partner" ? "red" : "white",
//                   textTransform: "none",
//                   fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
//                 }}>Partner
//               </Button>
//               <Button onClick={() => navigate("/ourjourney")}
//                 sx={{
//                   color: location.pathname === "/ourjourney" ? "red" : "white",
//                   textTransform: "none",
//                   fontWeight: 500,fontSize: "18px",letterSpacing: "0.5px",
//                 }}>AboutUs
//               </Button>
//             </Box>
//           )}

//           {!isMobile && (
//             <Box sx={{ display: "flex", gap: 1.5 }}>
//               <Button
//                 variant="outlined"
//                 startIcon={<SmartphoneIcon />}
//                 onClick={() => navigate("/getapp")}
//                 sx={{
//                   color: "#fff",
//                   borderColor: "#fff",
//                   borderRadius: "20px",
//                   textTransform: "none",
//                 }}
//               >
//                 Get App
//               </Button>

//               <Button
//                 variant="outlined"
//                 sx={{
//                   color: "#fff",
//                   borderColor: "#fff",
//                   background:"rgb(250, 10, 10)",
//                   borderRadius: "15px",
//                   textTransform: "none",
//                 }}
//                 onClick={() => navigate("/contactus")}
//               >
//                 Contact Us            
//               </Button>
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="left"
//         open={open}
//         onClose={toggleDrawer(false)}
//         transitionDuration={400}
//         PaperProps={{
//           sx: {
//             top: "56px",
//             height: "calc(100% - 56px)",
//           },
//         }}
//       >
//         <Box sx={{ width: 250, }} onClick={toggleDrawer(false)}>
//           <List>
//             {[
//               { text: "Home", path: "/"},
//               { text: "Events", path: "/events" },
//               { text: "ProShoot", path: "/proshoot" },
//               { text: "Services", path: "/services" },
//               {text: "Discover", path: "/discover" },
//               {text: "Partner", path: "/partner"  },
//               { text: "Our Journey", path: "/ourjourney" },
//             ].map((item) => (
//               <ListItem button key={item.text} onClick={() => {
//                   navigate(item.path); setOpen(false);}}
//               ><ListItemText primary={item.text}
//                   sx={{fontSize: "16px",fontWeight: 500,
//                     color: location.pathname === item.path ? "red" : "inherit",
//                   }}/>
//               </ListItem>
//             ))}
//           </List>

//           <Box sx={{ p: 2 }}>
//             <Button fullWidth variant="outlined" startIcon={<SmartphoneIcon />}
//             onClick={() => {navigate("/getapp");
//               setOpen(false);}} sx={{ mb: 1 }}>
//               Get App
//             </Button>
//             <Button fullWidth variant="outlined"
//              onClick={() => {navigate("/contactus");
//               setOpen(false);}}>
//               Contact Us
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </>
//   );
// };
// export default Header;


