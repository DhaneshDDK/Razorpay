/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      borderColor:"#181C2E",
    },
  
      screens: {
        'nav' : '1350px',
        'navb':{'max':'1350px'},
        'laptop': '1500px',
        'laptopb': {'max': '1070px'},
        'bg1': {'min' :'1200px'},
        // => @media (min-width: 1000x) { ... }
        'mobile': {'max': '550px'},
        // => @media (max-width: 1300px) { ... }
        'medium':{'min':'550px' , 'max':'1500px'},

        'section2':{'max':'800px'},
        'info' : {'max':'1060px'},
        'info1' : {'max':'750px'},
         
        'cardb1' : {'max':'1050px'},
        'cardb2' : {'max':'750px'},
        
        'section1' : {'max' : '1270px'}, 
        'section3' : {'max' : '768px'}, 

        'low' : {'max':'550px'},

        'img2' : {'max' : '1080px'},
        'img21' : {'max' : '870px'},
        'mg' : {'max' : '670px'},
        
      },
    
  
  },
  },
  plugins: [],
}