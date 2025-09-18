import React from "react"
import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"

// data
export const aboutAmpri = {
    title: "Functional Materials and Composites Division (FMCD)",
    pageContent: {
        content: [

            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2017/03/poly4-1024x512.jpg', alt: 'poly4'
            },
            {
                type: "subHeading",
                para: "Green Engineered Materials and Additive Manufacturing"
            },
            {
                type: "paragraph",
                para: "CSIR-AMPRI has been working actively on the development of polymer composite over a decade, has experience on design, simulation and Product development using various materials and processes to support industries near Bhopal. During the 12th plan project, we have actively participated in developing CNT reinforced Shape Memory Polymers composites and its applications. We also developed high strength insulating polymer composites. In the year 2015, we started working on making single layer Graphene (2D allotrope of Carbon arranged in honeycomb lattice) through RTP-CVD. In order to lead AMPRI in the new emerging manufacturing technologies, we have recent initiative on developing Graphene based composite materials and components through 3D printing technologies. In another direction our scientist are also working on Atomistic Molecular Dynamics simulation, Finite Element Simulation and failure analysis. Group consist of strong scientific & technical staffs & AcSIR students from multidisciplinary backgrounds from engineering and science working on cutting edge research on materials science and processes."
            },
            {
                type: "subHeading",
                para: "CNT Reinforced Shape Memory Polymer Composites"
            },
            {
                type: "paragraph",
                para: " Shape Memory Materials are a class of smart materials which are capable of holding a temporary shape until a suitable stimulus is applied after which they regain their original permanent shape. Under the Project for 12th FYP on “Design and Development of Thermo Responsive & Magnetic Shape Memory Materials and Devices for Engineering Applications” an activity of improvement in shape memory polymer composites was undertaken. Shape Memory Polymers (SMP), are being studied extensively for various engineering applications. The stimuli for SMPs include heat, moisture, solvent or change in pH value light, stress etc.  SMPs possess exceptional high recovery strain but their low recovery-stress, thermal and electrical insulation result in limited applications. The methods such as increasing the cross-linking density, adding inorganic fillers to polymer matrix, changing polymer chemistry or changing deformation conditions, etc. have been adopted to increase the elastic modulus and in turn the recovery stress of SMPs. The reinforcement of SMPs with CNTs has been investigated in CSIR AMPRI to improve their mechanical and electrical properties."
            },
            {
                type: "paragraph",
                para: "The shape memory effects in the samples were observed using conventional thermo mechanical cycle, as well as a modified thermo mechanical cycle designated as PSRS (Progressive Stretch-Relax-Stretch) cycle. The conventional SMCP involves; i) heating the sample to TH which is higher than the glass transition temperature, Tg, ii) deforming/stretching to a certain level, iii) bringing down the temperature below Tg without relaxing the deformation strain, iv) removal of imposed strain (clamps etc.) and allowing the sample to relax and attain a fixed length, lf, or a temporary shape.  Sample is now ready to evaluate shape memory effects as shape memory has been created in the specimen. As mentioned in step (ii), sample was stretched continuously to a certain length ls at temperature TH in conventional SMCP, whereas under the modified SMCP the deformation step (ii) was replaced with PSRS scheme of deformation. Accordingly, the maximum strain in step (ii) was attained in several steps with intermittent relaxation. In other words small strain is followed by relaxation and stretching, and further followed by second relaxation and stretching. The process continues until the maximum designed strain is achieved. Steps (iii) and (iv) remained the same as in conventional method for creating shape memory in the polymeric materials."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/intg1.png', alt: 'intg1'
            },
            {
                type: "paragraph",
                para: "Different test specimen were prepared and were designated as SMPU, PUCNT1, PUCNT2, PUCNT3, and PUCNT4 having 0, 0.063, 0.125, 0.188 and 0.250 phr MWCNT in SMPU respectively. Figure-1 shows three stress strain curves and three recovery stress strain curves of polyurethane (SMPU) samples corresponding to PSRS scheme of development and characterization of shape memory polymer. The maximum strain was attained in three steps; first sample was stretched 17% and relaxed, then stretched up to 34% and relaxed, finally in third steps the sample were stretched to 51%.  After allowing them to fix a temporary shape, recovery stress was determined as per standard procedure. The recovery stress of SMPU at 70oC was observed as 1.09 MPa. The strain recovery was 77.75% in this case. Similarly Figure 2 shows three stress strain curves and three recovery stress strain curves of CNT reinforced polyurethane (PUCNT1) samples corresponding to PSRS scheme of development and characterization of shape memory polymer."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/intg2-768x373.png', alt: 'intg2'
            },
            {
                type: "paragraph",
                para: "Figure shows the recovery stresses of deformed samples at different strain by 1) conventional method and 2) PSRS method. The samples were stretched to the maximum (51%) strain at 70oC by conventional and PSRS method. The stretched samples were brought to ambient temperature, and relaxed. The recovery stresses were measured corresponding to deformed strain once the samples were brought to 70oC and the strain was relaxed slowly with constant strain rate. The recovery stresses of SMPU, PUCNT1, PUCNT2 and PUCNT3 were found to be 1.04, 1.14, 1.58 and 2.11 MPa, respectively for PSRS and 0.88, 1.06, 1.55 and 1.97 MPa, respectively for conventional deformation. Higher values in recovery stresses were observed in the PSRS scheme as compared to conventional scheme."
            },
            {
                type: "subHeading",
                para: " A High Mechanical Strength Environment Friendly Electrical Insulation"
            },
            {
                type: "paragraph",
                para: " Natural fibre based electrical insulating materials provide an alternative to conventional electrical insulation due to their eco-friendliness and biodegradability. Sisal fibre is one of the most promising natural fibre for application where the combination of electrical and mechanical properties is required. The sisal fibril based epoxy composites with different fibril loading composite could be used where maximum mechanical strength and good electrical insulation are required like press board in transformer and its assembly used in transformer manufacturing."
            },
            {
                type: "paragraph",
                para: "The sisal fibrils were treated by 5% NaOH solution for accomplishing the desired results. The mechanical and electrical properties of untreated sisal fibril reinforced epoxy (USFE) and treated sisal fibril reinforced epoxy (TSFE) composites were evaluated. The effect of frequency variation on dielectric constant ɛ’ and dissipation factor tanδ of TSFE composites are also shown for different fibril loadings; 10, 20, 30 and 35 wt. %. The tests were carried out at room temperature in frequency range of 1-10 kHz. It was observed that the dielectric constant ɛ’ and dissipation factor tan δ of TSFE were decreased with increased frequency Fig. 2 and Fig.3 respectively."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/intg3-768x492.png', alt: 'intg3'
            },
            {
                type: "subHeading",
                para: "High quality single layer Graphene on Cu foils through RTP-CVD"
            },
            {
                type: "paragraph",
                para: "Last year we have successfully demonstrated high quality single layer Graphene on Cu foils. The developed process is unique and enables us to make Graphene through cheap technology. Only by developing such low cost technology in future we could achieve the Graphene fibers by expanding our low cost Rapid Thermal Processing – Chemical Vapor Deposition (RTP-CVD). This year we have carried out several experimentation and optimized the results for growth of above 90% single layer Graphene over an inch Cu foils. Hence we have demonstrated the growth of Single Layer Graphene the next step will be to make large area uniform single layer Graphene on Cu foils. The Graphene grown are of very high quality and ratio of intensity of 2D peak and G peak is close to 4.0. Which shows the device quality Graphene on Cu foils. We have made collaborative research with IISER, Bhopal for Raman mapping to confirm the quality of the Graphene. Also further process of making devices and utilize the Graphene to make various devices."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/intg4-300x247.png', alt: 'intg4'
            },
            {
                type: "subHeading",
                para: "Advanced Micro Lattice Structures made of Graphene composite materials"
            },
            {
                type: "paragraph",
                para: " We have utilized the metal 3D printing through collaboration from RRCAT, Indore and carried out work on optimizing the laser parameters of Al/Graphene composites. Laser  additive  manufacturing  (LAM)  is  one  of  the  advanced  manufacturing  technologies capable  of  manufacturing  complex  engineering  components  with  superior  material properties  by  layer  by  layer  deposition  of  material  directly  from  CAD  model.  Layer-by-layer addition  of  material  empowers  LAM  in  selective  deposition  of  pre-defined  composition  of material  shaping  the  engineering  components  making  it  a  feature  based  design  and manufacturing  technology.  The  LAM  built  components  largely  depends  on  LAM  processing parameters  and  the  quality  of  single  deposited  layer.  Hence  selection  of  appropriate processing  parameters  is  one  of  the  mandatory  requirements  for  achieving  superior mechanical  properties  LAM  built  components.  This  paper  reports  the  LAM  of aluminum/grapheme  (Al-G)  composite  on  Al  and  SS  substrate.  2  kW  fiber  laser  based additive manufacturing with 2 mm laser beam diameter at substrate was used to deposit AlG  layers  (Al  +  1%wt  G)  at  different  combinations  of  laser  scanning  speed  and  laser  power. Effect of laser power and scanning speed on the quality of deposited layers was investigated and optimum parametric window was identified. The Optimum range of energy intensity is 50  to  400  J/mm  which favors  material  deposition  (<  50P/v  –  <  400  J/mm).  Thus  prepared samples  were  subjected  to  optical  microscopy,  scanning  electron  microscopy  and microhardness  measurements.  A  good  quality  continuous  track  is  observed  at  108  J/mm energy  intensity  and  there  is  very  slight  change  in  hardness  observed  on  Al  substrate).  A significant  increase  in  micro  hardness  is  observed  on  SS  substrate.  The  maximum  value  of HV  is  463.6  at  0.6  m/min.  laser  scanning  speed  and  1.2  kW  laser  power.  These  LAM  built Aluminium  grapheme  composite  have  potential  applications  in  the  field  of  light  weight  and high strength material for manufacturing of complex shape and cellular structure"
            },
            {
                type: "paragraph",
                para: "A metallic microlattice is composed of a network of interconnecting hollow struts. Metallic microlattices are characterized by very low densities. Mechanically, these microlattices are behaviorally similar to elastomers and almost completely recover their shape after significant compression. This gives them a significant advantage over earlier aerogels, which are brittle, glass-like substances. This elastomeric property in metallic micro lattices furthermore results in efficient shock absorption. Metallic microlattices may find potential applications as thermal and vibration insulators such as shock absorbents, and may also prove useful as battery electrodes and catalyst supports. Automotive and aeronautical manufacturers are using microlattice technology to develop extremely lightweight and efficient structures that combine multiple functions, such as structural reinforcement and heat transfer, into single components for high-performance vehicles. In CSIR-AMPRI we have developed and 3D printed various micro lattice structures and studied its mechanical properties."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/intg5-768x301.png', alt: 'intg5'
            },
            {
                type: "paragraph",
                para: "Navel Calabi-Yau based micro lattice structures for light weight applications have been developed. Calabi-Yau manifold is a unique structure which particularly made by algebraic geometry. The extraordinary microarchitecture of this manifold excite the researcher to envisage the mechanical properties of the structure. In order to identify the mechanical properties of the structure, this study has been undertaken. The structure have been designed on Rhinoceros-Grasshopper with certain geometrical parameter such as dimension (6D, 7D, 8D, 9D, 10D) and 3D printed by FDM printer with PLA material. Making of cellular materials of complex geometrical structures to reduce strength to weight ratio are the leading application part for additive manufacturing. Furthermore 3D printer is used to manufacture uniform cellular solids which is having high strength accompanied by a relatively low mass, better energy absorption characteristics, making them suitable for high value aerospace, medical and engineering applications."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/05/intg6-768x594.jpg', alt: 'intg6'
            },

            {
                type: "subHeading",
                para: "Rapid Thermal Processing – Chemical Vapour Deposition (RTP-CVD) growth of high quality large area Graphene"
            },
            {
                type: "paragraph",
                para: "Graphene has attracted a great interest because of its unique band structure and electronic properties that’s make it promising candidate for next-generation electronic devices, transparent, flexible electrode, sensors and multi functional composites. In this talk, we discuss the general details of Raman characterization of Graphene from various commercial sources and home grown Graphene samples. We also give emphasis on need of standardization procedure for Graphene characterization. Another challenging area is the characterization of Graphene in the composite materials, Raman plays vital role in the characterization of the Graphene reinforced composite materials. We discuses in the detail using Raman spectroscopy with mapping as important tool for characterization of Graphene before making composites and the state of graphene and its interface interaction with matrix. A Raman spectra of single layer graphene grown by Rapid Thermal Processing- Chemical Vapor Deposition (RTP-CVD) system has shown I2D/IG ratio of 3.83, indicating very high quality single layer graphene. The grown films were characterized by Raman spectroscopy with mapping to investigate morphology of graphene."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/07/gr1.jpg', alt: 'gr1'
            },
            {
                type: "subHeading",
                para: "An automated program has been developed to carry out background removal using Continuous Wavelet Transformation (CWT) and carry out non linear least square fitting of Raman mapping data."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/07/gr2.jpg', alt: 'gr2'
            },
            {
                type: "subHeading",
                para: "Graphene reinforced SS + Graphene composites by Additive Manufacturing"
            },
            {
                type: "paragraph",
                para: " In this work, we developed a Steel Graphene composite in which a two-dimensional graphene is used as reinforcing agent to 3-Dimensional materials, which is good substitute for almost all type of reinforcing agent. It is very difficult to disperse graphene in liquid melt due to its very high tendency of agglomeration and large difference in density. In this work, we use alternative processing methods and process optimization for making GMMC. Graphene has very poor wet ability with metallic materials. A good interfacial bonding with metal matrix is the key for making high strength composites. A detailed study is required to understand the wetting behaviors of Graphene with metal matrix. Also surface modifications and process modification of the materials needs to be studied in details to successfully incorporating Graphene in metal and alloys. Graphene is a single atomic layer of carbon arrange in honeycomb lattice which is 2D material. In order to harness the properties of Graphene, we need to develop outbox processing methods to successfully synthesis GMMC. Aim of the work is to i. To increase sp. Strength of steel without effecting its corrosion resistance property by making Steel/Graphene composite. Study the effects of Graphene composition on Corrosion, mechanical, thermal and electrical properties. Optimize the parameters of Laser based Metal Additive Manufacturing System in order to make high strength Graphene + Steel composites."
            },
            {
                type: 'image',
                src: 'https://ampri.res.in/en/wp-content/uploads/2018/07/gr3-768x361.jpg', alt: 'gr3'
            },
          

        ]
    }
}


function FunctionalMaterialsComposites({ isAdmin }) {
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

export default FunctionalMaterialsComposites