// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../../components/ui/Navbar"
import Topbar from "../../../components/ui/Topbar"
import Footer from "../../../components/ui/Footer"
import ContentRenderer from "../../../components/ui/ContentRenderer"

const data = {
    "title": "Tech Ready for Commercialization",
    "pageContent": {
        "content": [
            {
                "type": "heading",
                "para": "1.  Hammer Tips for Sugar Mills",
                "src": "",
                "alt": "",
                "items": [],
                "order": 1
            },
            {
                "type": "list",
                "para": "The technology developed in marketable form in 2013-2014. The salient feature of the technologies are:",

                "items": [
                    " Modified high chrome cast iron containing Ni and Mo hammer tip.",
                    "Brazed with steel base",
                    "Field trial analysis",
                    "Preparatory index above 84% ( comparable to conventional one)",

                ],
                "order": 2
            },
            {
                "type": "subHeading",
                "para": "Commercialization status",
                "src": "",
                "alt": "",
                "items": [],
                "order": 3
            },
            {
                "type": "paragraph",
                "para": "The technology has been transferred to M/S Asugar Engineering Services, Pune on06.02.2014.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 4
            },

            {
                "type": "heading",
                "para": "2.  Cement free Concrete",
                "src": "",
                "alt": "",
                "items": [],
                "order": 5
            },
            {
                "type": "list",
                "para": "The technology has been developed in 2012-2013. Fly Ash based Cement Free concrete made is fire resistant.",

                "items": [
                    "Solves global warming problem.",

                    " Obviates the need of water curing.",

                    "Energy  efficient  –  can  be  made  at  ambient  temperature  (35-400C approximately). ",

                    "Can be made by using conventional machineries.",

                    "Increased  productivity  as strength  is achieved  in seven  days  only compared to twenty eight days required for conventional  cement",

                    "Developed material is suitable for making prefabricated components for building materials.",
                    "Developed material is suitable for corrosion resistant coating of mild steel reinforcement used in concrete structures.",

                    "The increased productivity also saves on project cost and duration.",

                    "Developed Advanced Hybrid Organic-Inorganic geopolymeric materials possessing “pentavalent silicon complexes” due to incorporation of Hybrid Organic–Inorganic  liquor as special additives (3 to 5% only) leading to  improved engineering properties in comparison to conventional geopolymeric materials containing “tetravalent silicon complexes” only."

                ],
                "order": 6
            },
            {
                "type": "subHeading",
                "para": "Commercialization status",
                "src": "",
                "alt": "",
                "items": [],
                "order": 7
            },
            {
                "type": "paragraph",
                "para": "The technology has been transferred on 11.05.2013 to M/S Jindal Steel and Power Limited, Raigarh. Technology is ready to be transferred to other parties",
                "src": "",
                "alt": "",
                "items": [],
                "order": 8
            },
            {
                "type": "heading",
                "para": "3.  MMC Brake drums",
                "src": "",
                "alt": "",
                "items": [],
                "order": 9
            },
            {
                "type": "paragraph",
                "para": "MMC (Metal Matrix Composites)  in particular Aluminium alloy composites,  has emerged as a new generation of engineering materials with tailor made properties. The particles dispersed composites generally do not offer improvements in strength, their utility lies principally in improved tribological properties, modulus hardness and low coefficient of higher efficacy thermal expansion .",
                "src": "",
                "alt": "",
                "items": [],
                "order": 10
            },
            {
                "type": "paragraph",
                "para": "Developed composite materials leading to development of Brake Drum for wear applications. Al Composites found excellent materials through stir casting techniques have been developed.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 11
            },
            {
                "type": "paragraph",
                "para": "Brake Drums tested in Maruti Omni, Nissan Jonga Jeep for their performance.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 12
            },
            {
                "type": "subHeading",
                "para": "Commercialization status",
                "src": "",
                "alt": "",
                "items": [],
                "order": 13
            },
            {
                "type": "paragraph",
                "para": "Technology  has  been  transferred  to  M/S Exclusive Magnesium Private Limited, Hyderabad on 11.05.2015.Ready  to transfer to other parties.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 14
            },
            {
                "type": "subHeading",
                "para": "Business Opportunities ",
                "src": "",
                "alt": "",
                "items": [],
                "order": 15
            },
            {
                "type": "paragraph",
                "para": "In view of large volume of industrial usage in automobile sector, good Business opportunities are there for entrepreneurs.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 16
            },

            {
                "order": 17,
                "type": "heading",
                "para": "4. High Performance Hybrid Composite Materials"
            },
            {
                "type": "paragraph",
                "para": "The HP composites have been developed with multiple objectives on multidisciplinary     subject. The density of the composites can be achieved as per the requirement with glossy finish.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 18
            },
            {
                "type": "paragraph",
                "para": "The HP composite materials are comparable to natural and synthetic wood and plastic, interns of it quality and applications  and thus could be used for multifunctional applications",
                "src": "",
                "alt": "",
                "items": [],
                "order": 19
            },

            {
                "type": "list",
                "para": "The major Advantages of HP Composites are:",

                "items": [
                    "Stronger than wood and conventionally avilable products such as Plywood, New Wood, Medium density Fibre Board, Rice Husk Board, Particle Board, Teak Wood .",

                    "Durable, Weather and Corrosion resistant",

                    "Resistance to water, moisture, Termite, insects and fungus",

                    "Fire retardant, self-extinguishing nature",

                    "Cost effective & maintenance free composites",

                ],
                "order": 20
            },
            {
                "type": "paragraph",
                "para": "We can use this Composite as a finised products; as a core material and as a skin element in sandwich composite structure. It is a multifunctinal materials can be used as doors, falls ceilings, flooring tiles, partition wall panels, and for making furniture.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 21
            },
            {
                "type": "paragraph",
                "para": "These Composites consume less energy for manufacturing and environmental friendly green materials.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 22
            },
            {
                "type": "paragraph",
                "para": "This composites can be used as an architectural interiors in building industry and in train, buss, ship.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 23
            },
            {
                "type": "paragraph",
                "para": "There are only 3 constituents/ raw materials needed for making this composites namely: Industrial waste particulates (Fly ash, bauxite waste, mineral waste, metallurgical wastes) / and fibres, polymers and are available easily.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 24
            },
            {
                "type": "subHeading",
                "para": "Commercialization status",
                "src": "",
                "alt": "",
                "items": [],
                "order": 25
            },
            {
                "type": "paragraph",
                "para": "The Technology/knowhow has been transferred to M/S Chauhan Fly ash Products Limited, Chandrapur on 11.05.2015.Ready to be transferred to other parties.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 26
            },

            {
                "order": 27,
                "type": "heading",
                "para": "5. Hybrid Wood Substitute Composite"
            },
            {
                "type": "paragraph",
                "para": "Technology has been developed for making composite panels using industrial waste  particulates,  natural  fibres  and  polymers.  The  technology  was developed in form of lead long back in form of  lead, then in 2012-2013. However it was developed in marketable form in 2015–2016.The technology has been transferred to M/S",
                "src": "",
                "alt": "",
                "items": [],
                "order": 28
            },
            {
                "type": "paragraph",
                "para": "These composites can be used as a substitute for timber and plastic products. This technology has been developed as a consequence of the National Forest industry.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 29
            },
            {
                "type": "paragraph",
                "para": "Realization of this technology is expected resulting in the effective use of renewable resources and  contributing to reduce issues associated with fly  ash and industrial wastes management, deforestation and climate change.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 30
            },

            {
                "type": "list",
                "para": "Uniqueness of the products:",

                "items": [
                    "Stronger ( flexural, impact strength) than wood",

                    "Weather resistant and durable",

                    "Termite fungus, rot and rodent, moisture, resistant",

                    "Fire retardant, self-extinguishing nature",

                    "More cost effective than teak wood, GRP and products",

                    "Maintenance free",

                    "Use in variety of applications: Door, false ceiling, flooring, roofing, partition, and furniture"

                ],
                "order": 31
            },

            {
                "type": "subHeading",
                "para": "Beneficiaries & Application",
                "src": "",
                "alt": "",
                "items": [],
                "order": 32
            },
            {
                "type": "paragraph",
                "para": "Building construction industries, automobile, locomotive and transport system",
                "src": "",
                "alt": "",
                "items": [],
                "order": 33
            },

            {
                "type": "subHeading",
                "para": "Commercialization status",
                "src": "",
                "alt": "",
                "items": [],
                "order": 34
            },
            {
                "type": "paragraph",
                "para": "The technology has been transferred to M/S VSM Industries Private Limited, Surat on 26.09.2015. Ready to be transferred to other parties.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 35
            },
            {
                "type": "heading",
                "para": "6. Sisal Buffing Wheel",
                "src": "",
                "alt": "",
                "items": [],
                "order": 36
            },
            {
                "type": "list",
                "para": "buffering wheel :",

                "items": [
                    "Sisal is one of the strongest agro based fibre amongst all plant fibres and is available in large quantities in Balaghat,  Seoni, Mandla, Betul districts of M.P. as well as  in many other states viz. Chattisgarh, Jharkhand, Andhra Pradesh, Maharastra, Orissa, T.N. etc.",

                    "Sisal buffing wheels can replace the existing cotton buffing wheels (Stripper). It showed better performance and saving of time and electricity.",

                    "Stitching of layers and suitable mounting arrangements offer  ease in mounting onBuffing Machines.",

                    "Suitable for applications in polishing/buffing industry, rural metal handicraft industry, engineering, automobiles and furniture. The use of sisal fibre reduces the buffing time to 15-20% as compared to cotton buffing wheels (Strippers).",

                    "Stitching of sisal felt/sisal cloth and cotton cloth can be carried out spiral manner having 5 mm gap approximately between two consecutive stitching circles and 5 mm stitch length approximately. The stitching is done by self locking stitches/ knots manually or by using a stitching machine.",

                    "The mounting of Buffing wheel can be carried out either by circular leather/plastic sheet and nails or by circular gasket sheet and aluminium rivets.",

                    "Helpful in employment generation in rural areas and benefit to growers of sisal fibre, farmers, producers and artisans etc."

                ],
                "order": 37
            },
            {
                "type": "subHeading",
                "para": "Commercialization status",
                "src": "",
                "alt": "",
                "items": [],
                "order": 38
            },
            {
                "type": "paragraph",
                "para": "Ready to transfer",
                "src": "",
                "alt": "",
                "items": [],
                "order": 39
            },

            {
                "type": "heading",
                "para": "7. Radiation shielding material",
                "src": "",
                "alt": "",
                "items": [],
                "order": 40
            },
            {
                "type": "paragraph",
                "para": "For the first time in the world, AMPRI has developed. A novel process for making non-toxic, highly effective shielding materials for attenuation X–ray and Gamma radiation, utilizing industrial waste, namely red mud and fly ash. The evaluation of shielding characteristic of the developed materials was carried out at Atomic Energy Regulatory Board (AERB), Mumbai. AERB has computed half value thickness (HVT) and compared it with that of conventional concrete and lead materials and suggested that shielding materials being developed can be used for the various shielding applications in diagnostic X-ray and CT installation",
                "src": "",
                "alt": "",
                "items": [],
                "order": 41
            },
            {
                "type": "paragraph",
                "para": "Non Toxic – Lead free & rare earth free ,Density – 2.0 – 4.5 g/cc , Shielding – High energy EM Radiation:,X Ray, Gamma Ray & Neutron radiation, High Temperature Stability – 13000C ,HVT (ShieldingThickness)–Low thickness",
                "src": "",
                "alt": "",
                "items": [],
                "order": 42
            },

            {
                "type": "list",
                "para": "Level/Scale of Development   :",

                "items": [
                    "Laboratory level development",
                    "Semi Pilot Plant level trial successful",

                    "Developed radiation shielding materials is successful demonstration of at X-ray room of Govt. J. P. Hospital, Bhopal"

                ],
                "order": 43
            },
            {
                "type": "subHeading",
                "para": "Commercialization status",
                "src": "",
                "alt": "",
                "items": [],
                "order": 44
            },
            {
                "type": "paragraph",
                "para": "The technology is ready to be transferred to industrial partners.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 45
            },

            {
                "type": "heading",
                "para": "8. Waste Gypsum and fiber based Board / Panel for partitioning",
                "src": "",
                "alt": "",
                "items": [],
                "order": 46
            },
            {
                "type": "paragraph",
                "para": "Gypsum has been extensively used as a finishing material for wall and ceilings in the past. It exhibits excellent performance, very good appearance and healthful contribution for living conditions.  In addition gypsum has widely been used as construction  materials because of its relative low cost, easy handling and mechanical characteristics, suitable for different applications makes it a widely used construction material.  At the same time it also has some undesirable characteristics like heaviness, brittleness etc.    but these can be managed by suitable R&D. Now a day’s research on new and alternative building materials is very intense. In the present competitive market of building materials seeking a material that meets both socioeconomic expectations as well as environmental preservation.    Gypsum based composites have more and more extensive applications in the development of new type partitioning wall / panels material. United States of America, Australia, Japan etc., have successfully developed several kind of materials based on gypsum and showed merits like density, good insulating property for light portioning wall.  But these materials are developed using virgin gypsum.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 47
            },
            {
                "type": "list",
                "para": "The developed material can be made with significantly zero energy consumption. It can be    made in-situ, on site & on demand with wide range of working from manmade to mechanization techniques. It has following benefits :",

                "items": [
                    "Bulk utilization of  waste gypsum;",

                    "Savings of  huge  capital  investments (machineries) required in  production;",

                    "Saving of fuel and energy;",

                    "It does require very less curing without water ;",

                    "Fire Resistant Material;",

                    "It is Resistant to a) Heat,",

                    "Alkaline and Acidic environment:",

                    "Solves global environmental pollution",

                    "Developed material possesses improved engineering properties.",

                    "Energy    efficient    –  can  be  made  at  ambient    temperature    (35-40Capproximately);",

                    "Can be made by conventional machineries",

                    "Saving of precious land used for dumping of Gypsum waste",

                    " Eco–friendly material",

                    "Land saving from dumping of waste materials",

                ],
                "order": 48
            },
            {
                "type": "subHeading",
                "para": "Commercialization status",
                "src": "",
                "alt": "",
                "items": [],
                "order": 49
            },
            {
                "type": "paragraph",
                "para": "Ready to be transferred after some value addition.",
                "src": "",
                "alt": "",
                "items": [],
                "order": 50
            },


        ],
        "tabs": []
    },

}

function TechReadyForCommercial({ isAdmin }) {

    return (
        <div className="min-h-screen">
            <Topbar isAdmin={isAdmin} />
            <Navbar isAdmin={isAdmin} />

            {data && <ContentRenderer contentData={data} isAdmin={false} />}

            <Footer />
            <div id="google_translate_element" className="invisible"></div>
        </div>
    )
}

export default TechReadyForCommercial