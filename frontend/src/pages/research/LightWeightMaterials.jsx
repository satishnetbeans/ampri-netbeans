import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// data
export const aboutAmpri = {
    title: "Light Weight Materials Division (LWMD)",
    pageContent: {
        content: [

            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/FOAM-1024x702-1024x702.jpg', alt: 'FOAM'
            },
            {
                type: "paragraph",
                para: " AMPRI activities in the development of light weight high performance metallic  materials include aluminum metal matrix composite (Al MMCs), aluminum foam with uniform cell size and distribution, development of components, such as Al MMC brake drums, Al foam filled crash boxes, Al filled sandwitch panels, Mg Alloy casings etc.  The facilities  for developing ultrafine particle reinforced  Al MMCs through electromagnetic strring followed by ultrasonic vibration are being established.   Facilities for pressure die – casting, semi solid processing etc that will be utilised for developing light weight metallic components for automobile sector are also being added.  Secondary processing, such as, hot and cold rolling, extrusion facilities have been set up for processing of Al and Mg alloys and their composite.  Some of the latest work are:"
            },
            {
                type: "subHeading",
                para: "Al-SiC composite brake drums through high pressure die casting"
            },
            {
                type: "paragraph",
                para: "Aluminium alloy metal matrix composites (Al MMCs) are drawing considerable industrial and scientific attention now-a-days. Major limitations in ALMMCs is the casting by gravity route, which limits their engineering application and their characteristics/performance could be improved through faster pouring of the melt in the mould and by higher rate of solidification. Thus pressurized solidification by pressure die casting could be a very potential technique. Pressure die casting of AL MMCs has been explored over the past to a very limited extent and hence requires more to be studied systematically by varying various processing parameters like injection pressure, temperature and time, etc, to reap the benefits of the material system as well as the processing technique in practice. Therefore the present work carried out involved the development of AL MMCs Brake Drum using pressure die casting technique that could enable to ultimately get good quality castings/components."
            },
            {
                type: "paragraph",
                para: "In the present work two alloys compositions with optimum percentage of SiC particles have been tried. The characterization of these materials for various physical, mechanical, thermal and wear properties have been carried. The simulation of casting of break drum has also been taken up. First the solid modelling of existing die casted brake drum has been prepared using ABAQUS, software. Then it is taken into casting software to do the pressure die casting simulation. As the brake drum is of cast iron available in the market, which is to be replaced with AlMMC brake drum, both these materials are considered in the present casting simulation. Therefore two separate casting simulations have been done using these materials. The regions of the brake drum solidify in different stages were also seen. The last solidification region is compared with maximum stress region of the brake drum found in the simulation results."
            },
            {
                type: "paragraph",
                para: "Wear testing of cast iron and aluminium metal matrix composite plates were carried out for different time of 5min, 10min, 15min and 20minutes. The rise of temperature and rate of cooling results were also studied. The wear property result of existing cast iron material is compared with the developed ALMMC materials. These wear tests were carried out against the braking material. The understanding of wear property will help in the use of developed ALMMC material in brake drum."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/lightweight_fig1.jpg', alt: 'lightweight_fig1'
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/lightweight_fig2.png', alt: 'lightweight_fig2'
            },
            {
                type: "subHeading",
                para: "Al-SiC nose cone for torpedoes as specified by NSTL, Vishakhattanam"
            },
            {
                type: "paragraph",
                para: "The dimension and property requirement for nose cone have been given by NSTL. The composite materials (LM13-10% SiC particles) have been designed and synthesize using stir casting technique. The composite exhibited yield strength of 140 MPa.  The damping capacity of the composites have been"
            },
            {
                type: "paragraph",
                para: "examined. The materials after characterization and satisfying the requirement of NSTL,  the component has been made. Finally the component has been tested for its leak proof by NSTL. The prototypes have been supplied to NSTL for performance evaluation."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/Lightweight_Gig3.jpg', alt: 'Lightweight_Gig3'
            },
            {
                type: "subHeading",
                para: "Bio active Ti-based Porous composite for Bio-implant applications"
            },
            {
                type: "paragraph",
                para: "i-cenosphere  syntactic foams using cenospheres of different seizes and volume fractions were made using powder metallurgy technique. The foams were characterized in terms of mechanical properties and microstructures. The foams with 50% cenospheres exhibited a strength of 250-300 MPa. Its modulus varies in the range of 15 to 30 GPa.  The same foams have been characterized for understanding corrosion behavior. These foams exhibited excellent corrosion resistance in Hank’s solution. The Ti-cenosphere foams with and without HAP coating were used for invitro tests (cell viability). Furthermore, these foams were examined for cell or tissue adherences. It is observed that Ti-foams with 50% cenosphere and having cell size of 250 micron exhibited better cell viability and cell adherences. HAP coating exhibited improved cell viability."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/lightweight_Gig4.jpg', alt: 'Lightweight_Gig4'
            },
            {
                type: "subHeading",
                para: "Use of cenospheres for making Al-cenosphere syntactic foams"
            },
            {
                type: "paragraph",
                para: "Cenospheres of different size ranges were extracted from thermal power plant waste fly ash. These cenospheres are hollow spheres primarily consisting alumino-silicate phases.  These are stable up to 1000oC and the shells are strong. In view of these low cost bi-product of thermal power plant was used as micro-pore formation in aluminium alloys to make aluminium cenosphere syntactic foams. The density of aluminium cenosphere syntactic foams   comes to be around as low as 1.9 gm/cc. The remelting of aluminium cenosphere syntactic foams followed by solidification, leads to generation of"
            },
            {
                type: "paragraph",
                para: "Functionally graded syntactic foams. These foams further tested for electromagnetic shielding and found that thay have improved EMI shielding as compared to aluminium alloy. The absorption coefficient is also much higher than the alloy."
            },
            {
                type: "subHeading",
                para: "Microstructure of Al-cenosphere syntactic foamFunctionally graded Al-cenosphere foam billet."
            },
            {
                type: "subHeading",
                para: "Ti-foams for bone-scaffold and filtration Applications"
            },
            {
                type: "paragraph",
                para: "Open cell Ti-foams with 40 to 80% porosities and 50 to 250micron cell sizes were made through powder metallurgy technique. The pores are uniformly distributed and are precisely controlled. The compressive yield strength and modulus of these foams were found to be in the range of 20 to 350 MPa and 12 to 40 GPa respectively depending on the pore size and extent of porosity. The invitro tests of these foams were carried out using different cell liners. It is noted that the foams with 250 micron cell size and 50 to 60% porosity exhibited excellent cell viability and cell proliferations. The corrosion tests demonstrates that these foams are highly corrosion resistant against our biofluid. After al such characterization, these foams were coated with HAP and the similar tests were carried out. Improved performance were observed. Finally these foams were also tested for filtration. These Ti- or SS foams exhibited good filtration capability. The prototype filter and possible bio-implant are made in the laboratory using the optimized process parameters."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/lightweight_Fig5.png', alt: 'Lightweight_Gig5'
            },
            
            {
                type: "subHeading",
                para: "Aluminium Foam for Crash worthiness Applications"
            },
            {
                type: "paragraph",
                para: "CSIR-AMPRI has taken the activity for making cost effective high strength and energy absorbing aluminium foams for crash-worthiness applications. The high strain rate testing of aluminium foam exhibits plateau stress of 45 MPa at a strain rate of 1500 S-1, for its density of 0.7 g/cc (Fig). Aluminium foam filled crash boxes exhibited 100% improvement in energy absorption. The testing at ARAI, pune states that filling of 400g of aluminium foam in a crash box of 1000 gm increased the energy absorption from 9.9 kJ to 19.9 KJ at a speed of 54 Km/hr (Fig). This is sufficient to mitigate impact energy of a car weighing 750 Kg. Thus these foams can also be used excellently in other transportation sectors like rail to avoid damage due to train accidents.  These could be excellent materials for blast resistance applications. AMPRI, Bhopal has developed the competence in making foams with different density in large scale."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/lightweight_Fig4.png', alt: 'Lightweight_Fig4'
            },

        ]
    }
}


function LightWeightMaterials({ isAdmin }) {
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRenderer component */}
            <ContentRenderer from="LWMD" contentData={aboutAmpri} />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default LightWeightMaterials