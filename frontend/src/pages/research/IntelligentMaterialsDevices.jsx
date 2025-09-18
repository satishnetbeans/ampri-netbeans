import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// data
export const aboutAmpri = {
    title: "Intelligent Materials and Devices Division (IMDD)",
    pageContent: {
        content: [

            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/04/sma1.png', alt: 'sma1'
            },
            {
                type: "subHeading",
                para: "Intelligent Materials and Advanced Processes"
            },
            {
                type: "paragraph",
                para: "Intelligent Materials and Advanced Processes group, is working on shape memory alloys and developing actuator using the SMAs as part of 12th five year plan project.  Apart from the SMA’s group has developed and working on Pulse power forming techniques and its simulations for developing multi functional materials joining and forming.  A strong groups of Scientist, technical officers and PhD students from AcSIR from various streams like physics to metallurgy and materials science background working together on next generation functional materials and processing techniques.   Some of the work is described here under:"
            },
            {
                type: "subHeading",
                para: "Design and Development of Thermo Responsive & Magnetic Shape Memory Materials and Devices for Engineering Applications"
            },
            {
                type: "paragraph",
                para: "A complete set of compositions with different alloy systems namely Cu-Al-Ni, Cu-Al-Mn and Cu-Zn-Al with different alloying additions and grain refiners has been made and optimized conditions under which they exhibit the best shape memory properties has been drawn. The findings confirm the possibility of improvement on the shape memory properties like martensite formation, higher transitions temperatures and longer retention in selected alloys through proper alloying additions and heat treatments. Higher transformation temperatures have been reached and samples that have shown potential have been rolled to strips. A wire drawing machine has been purchased and installed. A complete data bank of alloys with potential of making shape memory products with properties has been drawn up."
            },
            {
                type: "paragraph",
                para: "Actuators for automobiles like door, petrol tank and dickey openers have been made and tested using Nitinol wires replacing pneumatic actuators. Later the commercially available wires will be replaced by the SMA wires developed at CSIR-AMPRI, Bhopal. At present and based on the above achievements, continuous and batch production of Cu-based SMAs wires/strips of desired dimensions are being taken up that will culminate in making of actuators from CSIR-AMPRI developed SMA wires."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/sma2.jpg', alt: 'sma2'
            },
            {
                type: "subHeading",
                para: "Electromagnetic Manufacturing"
            },
            {
                type: "paragraph",
                para: "Recently AMPRI have procured a 40 KJ, 20 KV Electromagnetic forming machine (Fig 1). This machine can be operated at upto 15 kHz frequency and is suitable for electromagnetic forming/joining (EMF) and electro hydraulic forming application. This facility will enable us to work on new application in metal forming and joining. This high strain rate technique is superiority to conventional methods in terms of formability, springback, wrinkling, drawability and joinability, productivity, No HAZ etc. It can be implemented in Research institute, Automobile, Aerospace, Nuclear, Home Appliances and Power sector. Some typical examples of application are shown in Fig. 2. New projects are being initiated with BHEL, RRCAT and other industries. Both applied and basic research is being carried out."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/emf1.jpg', alt: 'emf1'
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/emf2.jpg', alt: 'emf2'
            },
            {
                type: "subHeading",
                para: "Smart Material Actuator"
            },
            {
                type: "paragraph",
                para: "Smart material actuators for automobile/vehicle applications; the developed actuators for locking-unlocking the door latch assembly, fuel filler door/petrol lid release actuator and dickey latch release actuator system.  Shape Memory Materials are a broad class of smart materials [metals, polymers and ceramics] which are capable of holding a shape until a suitable stimulus is applied after which they regain their original shape. Shape Memory Effect (SME) properties are reported in terms of strain recovery rate, stress recovery rate, shape fixity, etc.  Its unique property of retaining different types of shapes at different fixed temperatures can be used for actuation systems effectively. SME effect is presented in SMA by mainly two phases which are changes from martensite to austenite and vice versa and this transformation due to either (i) temperature changes resulting in one way shape memory and/or two way shape memory or (ii) generating the martensitic phase in SMAs by applying load in the austenitic phase which is capable of storing large strains. These properties and reasons of SMA is exhibiting very high energy density; therefore SMA based actuators are compact and lightweight as the alternatives to other types of actuators."
            },
            {
                type: "paragraph",
                para: "In a modern car, different types of latches are used to control various functions of the car as well as providing comfort/safety to the driver. A latch is used to perform the task of a mechanical fastener which either operates by mechanical lever or electrical excitation. An automobile incorporates numerous special-purpose latches such as components of doors, hood/bonnet, trunk/boot door and the petrol tank lid etc. Presently, most of latches are mechanically operated either by applying tension through cable wire or by electro-mechanical means which is activated by DC motor or by solenoids. These actuators would be replaced by an alternative SMA technology for activating the latches of the vehicle. Since last couple of years CSIR-AMPRI is working actively in the area and smart material developed. During the execution of the 12th FYP and translation project, CSIR-AMPRI has developed expertise in smart material based actuator development especially using Nitinol shape memory alloy in wire form. The actuators were developed for automobile for locking-unlocking the door latch assembly, fuel filler door/petrol lid releasing actuator and dickey releasing actuator system for the vehicle/car. These actuators were designed and developed and their trial and testing is underway in cars. The figures of the developed actuators are shown below and one of prototype actuator was installed in car door for trial and testing as well as demonstrating technology. The electrical resistive heating method is most suitable and easily controlled method to achieving the transformation temperature."
            },
            {
                type: "paragraph",
                para: "The design and development of these actuators have negligible mechanical parts that comprises of shape memory alloy element(s), mechanical force transmitting lever in circular and/or rectangular cross section and pulleys. The SMA elements are arranged in antagonistic/opposite type arrangement for bidirectional linear motion. The movement of the lever is actuated the vehicle door latching system for lock or unlock position. This actuator device can be used for locking and unlocking of the mechanical lock latch assembly for example vehicle door latch, car central security latch, home door latch or similar kinds. The operation of this actuation device will be controlled through an electronic control system which is operated from either direct buttons or remote key buttons as shown in block diagram."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/sma3.jpg', alt: 'sma3'
            },
            

        ]
    }
}


function IntelligentMaterialsDevices({ isAdmin }) {
    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {/* Use the reusable ContentRenderer component */}
            <ContentRenderer contentData={aboutAmpri} />

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default IntelligentMaterialsDevices