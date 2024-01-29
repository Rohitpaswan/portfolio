import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";

const projectData = [
      //Project based on React tab
  { id: 0,
    title: "ConvoSync:",
    category: "React",
    description:  
    "A chatting app crafted with Firebase and React JS,enabling users to securely log in and engage in real-time conversations.",

    img: "../Image/projectImg/chatting.png",
    Links: [
        { id: 0,
          title: "GitHub",
          url: "https://github.com/Rohitpaswan/ConvoSync",
          icon: <GitHubIcon sx={{ backgroundColor: "#fff", color: "black", fontSize: "24px" }} />,
        },
        { id :1,
          title: "Demo",
          url: "https://convo-sync.vercel.app/login",
          icon: <OpenInNewSharpIcon />,
        },
      ]
      
  },

  { id: 1,
    title: "EasyBuys",
    category: "React",
    description:
      "This is an e-commerce app featuring a user-friendly cart system with filtering options",
    img: "../Image/projectImg/cart.png",

    Links: [
      { id: 0,
        title: "GitHub",
        url: "https://github.com/Rohitpaswan/EasyBuys",
        icon: <GitHubIcon sx={{ backgroundColor: "#fff", color: "black", fontSize: "24px" }} />,
      },
      { id: 1,
        title: "Demo",
        url: "https://easy-buys.vercel.app/",
        icon: <OpenInNewSharpIcon />,
      },
    ]

  },

 
  // Project based on javascript

  { id:3 ,
    title: " Dynamic E-commerce Landing Page",
    category: "Javascript",
    description:
      "Crafted with JavaScript, Bootstrap, HTML, and CSS, our e-commerce landing page offers a sleek and responsive design",
    img: "../Image/projectImg/landing.png",
    Links: [
      { id:0 ,
        title: "GitHub",
        url: "https://github.com/Rohitpaswan/Ecommerce-LandingPage",
        icon: <GitHubIcon sx={{ backgroundColor: "#fff", color: "black", fontSize: "24px" }} />,
      },
      { id :1 ,
        title: "Demo",
        url: "https://rohitpaswan.github.io/Ecommerce-LandingPage/",
        icon: <OpenInNewSharpIcon />,
      },
    ]
  },


];
export default projectData;
