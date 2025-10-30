// @ts-nocheck
import React, { useState, useEffect } from "react"

import Navbar from "../../components/ui/Navbar"
import Topbar from "../../components/ui/Topbar"
import Footer from "../../components/ui/Footer"
import ContentRenderer from "../../components/ui/ContentRenderer"
import DataTable from "../../components/ui/DataTableRender"

import { processTableData } from "../../utils/ProcessTableData"

const data = {
  "title": "Sophisticated Analytical Instruments Facility (SAIF)",
  "pageContent": {
    "content": [
      {
        "type": "subHeading",
        "para": " Welcome to CSIR-AMPRI  dedicated Sophisticated Analytical Instrument Facility to Provide High Quality Analytical Services to Researchers",
        "src": "",
        "alt": "",
        "items": [],
        "order": 1
      },
      {
        "type": "paragraph",
        "para": "CSIR-AMPRI is equipped with up to date R&D facilities in the area of material synthesis, processing and characterization. Some more sophisticated facilities are also in a process of being set up at the institute in order to carry out material processing and characterization with an improved degree of precision, especially with regard to nano structured material development. Keeping application in mind, the R&D facilities have been grouped as the ones meant for mechanical, physical, chemical, thermal, electrical, rheological & tribological property characterization.  Other sets of facilities include those for powder processing, primary processing like melting, secondary processing such as  heat treatment & deformation, and  micro structural studies.",
        "src": "",
        "alt": "",
        "items": [],
        "order": 2
      },

    ],
    "tabs": []
  },

}

const tableData = [
  {
    "equipment": "CNC Turning centre",
    "institutionCharge": "500/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 1
  },
  {
    "equipment": "CNC Vertical Miling Centre (VMC)",
    "institutionCharge": "500/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 2
  },
  {
    "equipment": "CAD Design software",
    "institutionCharge": "500/hour",
    "industryCharge": "800/hour",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 3
  },
  {
    "equipment": "Laser Powder Bed Fusion Proccessing additive manufacturing machine DMP FLEX 350(3D SYSTEM) build volume 275X275X400mm",
    "institutionCharge": "2500/hour",
    "industryCharge": "4000/hour",
    "remarks": "Terms and conditions given at Page No. 4",
    "document": [
      {
        "name": "[Click to View]",
        "url": "https://ampri.res.in/hi/wp-content/uploads/2025/09/TestingChargesEng-website.pdf"
      }
    ],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 4
  },
  {
    "equipment": "Fourier transform infrared spectrometer",
    "institutionCharge": "500/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 5
  },
  {
    "equipment": "FTIR Spectrometer with universal quicksnap sampling machine",
    "institutionCharge": "500/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 6
  },
  {
    "equipment": "UV Visible spectrophotometer",
    "institutionCharge": "600/sample",
    "industryCharge": "1200/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 7
  },
  {
    "equipment": "Inverted Fluorescence Micrpscope with four fluorescent filters (B,G,V,UV)",
    "institutionCharge": "600/hour",
    "industryCharge": "1500/hour",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 8
  },
  {
    "equipment": "Antimicrobial Testing Facility",
    "institutionCharge": "400/sample Disc Diffusion 1250/sample Microbroth Dilution/Bacterial Viability Assy",
    "industryCharge": "800/sample Disc Diffusion 2500/sample Microbroth Dilution/Bacterial Viability Assy",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 9
  },
  {
    "equipment": "Table-top X-ray Diffractometer",
    "institutionCharge": "600/sample",
    "industryCharge": "1200/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 10
  },
  {
    "equipment": "Benchtop SEM with EDS",
    "institutionCharge": "1000/sample (For Imaging)",
    "industryCharge": "2000/sample (For Imaging)",
    "remarks": "Gold Coating - Rs 300 Per Sample",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 11
  },
  {
    "equipment": "Split Hopkingson Bar Setup for Tensile Testing",
    "institutionCharge": "1500/sample",
    "industryCharge": "2500/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 12
  },
  {
    "equipment": "Bench Top XRD",
    "institutionCharge": "600/sample",
    "industryCharge": "1200/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 13
  },
  {
    "equipment": "Wealthrometer",
    "institutionCharge": "1500/sample",
    "industryCharge": "2000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 14
  },
  {
    "equipment": "Fully Automated sequential wavelength Dispersive X-ray Fluorescence spectrometer (WDXRF)",
    "institutionCharge": "2000/sample",
    "industryCharge": "2500/sample",
    "remarks": "1000/sample (Sample preparation charges)",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 15
  },
  {
    "equipment": "KEM QUICK Thermal Conductivity Meter",
    "institutionCharge": "1500/sample",
    "industryCharge": "2500/sample",
    "remarks": "Up to 5 Temp / step After 5 Temp / step Rs. 500 per",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 16
  },
  {
    "equipment": "LCR Meter Dielectric Constant & Dissipation Factor Measurement Setup",
    "institutionCharge": "1000/sample",
    "industryCharge": "1500/sample (LCR meter) 2000/sample (Dielectric constant",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 17
  },
  {
    "equipment": "Thermogravimetric analysis TGA,'DTA system",
    "institutionCharge": "1500/sample (up to 600 degree c ) 3000/sample up to ISOODC",
    "industryCharge": "2500/sample (up to 6000C ) 4000/sample (u to 15000c",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 18
  },
  {
    "equipment": "Field Emission Transmission Electron Microscope",
    "institutionCharge": "3500/sample Imaging",
    "industryCharge": "5500/sampIe Imaging",
    "remarks": "Sample Preparation charges for bulk materials are Extra which is given at Page No. 4",
    "document": [
      {
        "name": "[Click to View]",
        "url": "https://ampri.res.in/hi/wp-content/uploads/2025/09/TestingChargesEng-website.pdf"
      }
    ],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 19
  },
  {
    "equipment": "Polishing units Twin-Jet Electropolisher",
    "institutionCharge": "2100 Upt03 Sample Per Electrolyte (at Room Temp.) 2500 Upto 3 Sample Per Electrolyte (at Cryogenic Temp",
    "industryCharge": "4200 Upto 3 Sample Per Electrolyte (at Room Temp.) 5000 Upto 3 Sample Per Electrolyte (at Cryogenic",
    "remarks": "User should bring the required Chemicals/ Electrolytes/ Consumables/ Disposables as per sample requirements",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 20
  },
  {
    "equipment": "Raman Spectrometer",
    "institutionCharge": "800/sampIe",
    "industryCharge": "2500/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 21
  },
  {
    "equipment": "Differencial Scanning Calorimeter",
    "institutionCharge": "1500/sample",
    "industryCharge": "2500/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 22
  },
  {
    "equipment": "Particle Size Analyzer",
    "institutionCharge": "1000/samplc",
    "industryCharge": "1500/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 23
  },
  {
    "equipment": "Digital Optical metallurgical microsco , DM 6000M",
    "institutionCharge": "600/sample",
    "industryCharge": "1000/samp1e",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 24
  },
  {
    "equipment": "Optical Metallurgical Microsco , DM 2700",
    "institutionCharge": "600/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 25
  },
  {
    "equipment": "E-Beam powder bed fusion additive manufacturing facility",
    "institutionCharge": "3500/hour",
    "industryCharge": "6000/hour",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 26
  },
  {
    "equipment": "Table-top Atomic Force Microscopy",
    "institutionCharge": "30001sample For coating and film Samples",
    "industryCharge": "5000/sample For coating and film Samples",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 27
  },
  {
    "equipment": "Computer Controlled Benchtop Tribometer",
    "institutionCharge": "1000/sample (for 10 min-30min run time i.e. 1000-3000 frictional cycles)",
    "industryCharge": "2000/sample (for 10 min-30min run time i.e. 1000-3000 frictional cycles",
    "remarks": "For measurement time above 1 h, the price will be available on request.",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 28
  },
  {
    "equipment": "Optical Microscope",
    "institutionCharge": "600/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 29
  },
  {
    "equipment": "Contact Angle Analyzer",
    "institutionCharge": "350/sample",
    "industryCharge": "750/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 30
  },
  {
    "equipment": "Advanced UV-Vis s otometer ND-ONEC-W",
    "institutionCharge": "800/sample Liquid sam",
    "industryCharge": "1500/sample Liquid",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 31
  },
  {
    "equipment": "DMIRB for TL and FL with photo/TV side port LEICA MICROSCOPE",
    "institutionCharge": "600/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 32
  },
  {
    "equipment": "Motorized Inverted Research microscope",
    "institutionCharge": "600/sample",
    "industryCharge": "1000/sampIe",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 33
  },
  {
    "equipment": "Thermal Conductivity System",
    "institutionCharge": "1500/sample Up to 5 Temp / step After 5 Temp / step Rs. 500 per Temp / step Upto 5 Temp / step After 5 Temp / step Rs. 500 per Temp / ste",
    "industryCharge": "2500/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 34
  },
  {
    "equipment": "Electro Mechanical UTM",
    "institutionCharge": "1000/sample",
    "industryCharge": "2000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 35
  },
  {
    "equipment": "X-ray attenuation Testing Facility",
    "institutionCharge": "4000/sample",
    "industryCharge": "7000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 36
  },
  {
    "equipment": "Thermal Property Analyser",
    "institutionCharge": "1500/sample For thermal diffusivity/thermal conductivity (data for density & specific heat capacity to be provided by user) 2000/-sample For thermal conductivity with specific heat capacity measurement Density & specific heat capacity (data for density to be provided by user",
    "industryCharge": "2500/sampIe For thermal diffusivity/therm al conductivity (data for density & specific heat capacity to be provided by user) 3500/-sample For thermal conductivity with specific heat capacity measurement Density& specific heat capacity (data for density to be provided b user",
    "remarks": "For 5 measurement steps only, beyond 5 temperatures steps, an additional charge Of Rs. 500 (temperature step per sample will be charged",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 37
  },
  {
    "equipment": "HPLC",
    "institutionCharge": "1500/sample",
    "industryCharge": "2500/sampIe",
    "remarks": "User should bring the required Chemicals/ Electrolytes/ Consumables/ Disposables as per requirements",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 38
  },
  {
    "equipment": "XRD X-Ray Diffractometer",
    "institutionCharge": "800/sample",
    "industryCharge": "1500/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 39
  },
  {
    "equipment": "Thermogravimetric Analysis-Differential Scanning Colorimetry (TGA-DSC)",
    "institutionCharge": "1500/sample (up to 6000C ) 3000/sampIe up to 1500 degree C)",
    "industryCharge": "2500/sample (up to 6000C ) 4000/sample (up to 1500 degree C",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 40
  },
  {
    "equipment": "Atomic Absorption Spectrophotometer",
    "institutionCharge": "750/sample/eIement",
    "industryCharge": "1500/sample/ element",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 41
  },
  {
    "equipment": "Microplate Reader/ Microplate Spectrophotometer",
    "institutionCharge": "150/ plate (Absorbance Mode)",
    "industryCharge": "400/Plate (Absorbance Mode)",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 42
  },
  {
    "equipment": "UTM -50KN",
    "institutionCharge": "800/sample",
    "industryCharge": "1500/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 43
  },
  {
    "equipment": "UTM-25 RN-HT",
    "institutionCharge": "1000/sample",
    "industryCharge": "2000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 44
  },
  {
    "equipment": "Fibre Testing Machine",
    "institutionCharge": "800/sample",
    "industryCharge": "1500/sampIe",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 45
  },
  {
    "equipment": "Impact Tester",
    "institutionCharge": "500/sampIe",
    "industryCharge": "1000/sampIe",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 46
  },
  {
    "equipment": "Surface/VoIume Resistivity",
    "institutionCharge": "1000/sample",
    "industryCharge": "2000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 47
  },
  {
    "equipment": "Stereo Microscope",
    "institutionCharge": "600/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 48
  },
  {
    "equipment": "FESEM",
    "institutionCharge": "1500/sample",
    "industryCharge": "2500/sampIe",
    "remarks": "Gold Coating- Rs. 300 Per Sample",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 49
  },
  {
    "equipment": "UHT",
    "institutionCharge": "200/sample",
    "industryCharge": "600/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 50
  },
  {
    "equipment": "OES Spectrometer (Al and Mg Base)",
    "institutionCharge": "750/sample",
    "industryCharge": "1500/sampIe",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 51
  },
  {
    "equipment": "Table-top XRD",
    "institutionCharge": "600/sample",
    "industryCharge": "1200/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 52
  },
  {
    "equipment": "DSC, Mettler Make",
    "institutionCharge": "1500/sample",
    "industryCharge": "2500/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 53
  },
  {
    "equipment": "Fluorescence Spectrometer",
    "institutionCharge": "500/sample",
    "industryCharge": "1000/sample",
    "remarks": "",
    "document": [],
    "tab": "Testing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": [
        "order",
        "name of equipment",
        "Charges for academics institution(in Rs.)",
        "Charges for industry(in Rs.)",
        "remarks",
        "document"
      ],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 54
  },

  // Processing Facilities

  {
    "equipment": "Electrochemical workstation",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 1
  },
  {
    "equipment": "Semi-Automatic Screen Printer",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 2
  },
  {
    "equipment": "Glove Box",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 3
  },
  {
    "equipment": "Multi Auto Lab Multichannel Potentiostat",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 4
  },
  {
    "equipment": "Automated Electrosppinging Machine",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 5
  },
  {
    "equipment": "Digital Compression Molding Machine",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 6
  },
  {
    "equipment": "Cryo-Attritor Mill",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 7
  },
  {
    "equipment": "Planetary Ball Mill",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 8
  },
  {
    "equipment": "High speed camera",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 9
  },
  {
    "equipment": "Hot press for spark plasma Sintering facility",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 10
  },
  {
    "equipment": "Powder roll Compactor",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 11
  },
  {
    "equipment": "3D Printer",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 12
  },
  {
    "equipment": "Computer Controlled Servo Hydraulic Compression and Flexure Testing Machine",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 13
  },
  {
    "equipment": "Planetary Ball mill",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 14
  },
  {
    "equipment": "Grinding cum Ball mill",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 15
  },
  {
    "equipment": "Extruder for making granules of Paddy straw and PLA Polymer",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 16
  },
  {
    "equipment": "Electromagnetic Manufacturing Forming Machine",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 17
  },
  {
    "equipment": "High Performance Computing workstation",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 18
  },
  {
    "equipment": "3D Scanner",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 19
  },
  {
    "equipment": "CHEMICAL Vapor Deposition system",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 20
  },
  {
    "equipment": "Computer Controlled Magnetron Sputter",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 21
  },
  {
    "equipment": "Plasma-based hybrid thin film deposition tool",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 22
  },
  {
    "equipment": "Source Measurement unit",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 23
  },
  {
    "equipment": "Source Measure Unit",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 24
  },
  {
    "equipment": "RTP-CVD Tool",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 25
  },
  {
    "equipment": "High Velocity Oxygen fuel Spray coating unit",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 26
  },
  {
    "equipment": "Microwave chemical vapour deposition system",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 27
  },
  {
    "equipment": "Electrochemical workstation",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 28
  },
  {
    "equipment": "Multijet and Thermal Jet Extrusion based 3D Printer",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 29
  },
  {
    "equipment": "Spin Coater",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 30
  },
  {
    "equipment": "Programmable Capillary Electrophoresis System",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 31
  },
  {
    "equipment": "Eitre 3 Nanoimprint Lithography",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 32
  },
  {
    "equipment": "BOD INCUBATOR",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 33
  },
  {
    "equipment": "CARBON DI OXIDE INCUBATOR",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 34
  },
  {
    "equipment": "DLAB Refrigerated Centrifuge",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 35
  },
  {
    "equipment": "Ultra Low Temp. Deep Freezer (-80 deg)",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 36
  },
  {
    "equipment": "Probe Sonicator",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 37
  },
  {
    "equipment": "Fume Hood Setups for the Graphene Centre",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 38
  },
  {
    "equipment": "Double Action Hydraulic press",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 39
  },
  {
    "equipment": "Wire Drawing machine",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 40
  },
  {
    "equipment": "Strain Measurement system",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 41
  },
  {
    "equipment": "Plasma Enhanced CVD",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 42
  },
  {
    "equipment": "Programmable horizontal three zone tabular furnace",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 43
  },
  {
    "equipment": "High Temperature Vacuum hot press",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 44
  },
  {
    "equipment": "Semi automated Hot Press",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 45
  },
  {
    "equipment": "Multichannel Electrochemical Workstation.",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 46
  },
  {
    "equipment": "Atmoshpheric CVD Tubelar Split Furnace with Liquid Precursor assembly",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 47
  },
  {
    "equipment": "Electro Chemical Workstation",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 48
  },
  {
    "equipment": "3D Printer with Electrode position Facility",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 49
  },
  {
    "equipment": "3D Printer with workstation",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 50
  },
  {
    "equipment": "FDM High Temp Filament extruder",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 51
  },
  {
    "equipment": "Tubular furnace with gas purging",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 52
  },
  {
    "equipment": "Fluidized Bed Spray Coating System",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 53
  },
  {
    "equipment": "Closed cell al foam with system with Automation",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 54
  },
  {
    "equipment": "Cryomill alongwith spares & accessories",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 55
  },
  {
    "equipment": "Multi Channel Electrochemical work Station",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 56
  },
  {
    "equipment": "Hydrualic Press",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 57
  },
  {
    "equipment": "Low Tonnage Compression Testing Machine",
    "tab": "Processing Facilities",
    "table": {
      "pageTitle": "SAIF",
      "columns": ["order", "Processing Facilities"],
      "tabs": ["Testing Facilities", "Processing Facilities"]
    },
    "order": 58
  }
]


const TEM_SampleData = [
  {
    "Name Of Equipment": "Ion Milling system",
    "Slot Duration / NO.of samples": "one hour",
    "Academic & R&D Labs (in Rs.)": "500",
    "Industry (in Rs.)": "1000"
  },
  {
    "Name Of Equipment": "Ultrasonic Disc Cutter",
    "Slot Duration / NO.of samples": "one hour",
    "Academic & R&D Labs (in Rs.)": "400",
    "Industry (in Rs.)": "800"
  },
  {
    "Name Of Equipment": "Dimple Grinder",
    "Slot Duration / NO.of samples": "one hour/one sample",
    "Academic & R&D Labs (in Rs.)": "400",
    "Industry (in Rs.)": "800"
  },
  {
    "Name Of Equipment": "Disc Grinder",
    "Slot Duration / NO.of samples": "one hour/one sample",
    "Academic & R&D Labs (in Rs.)": "400",
    "Industry (in Rs.)": "800"
  },
  {
    "Name Of Equipment": "Low Speed Diamond Saw",
    "Slot Duration / NO.of samples": "one hour",
    "Academic & R&D Labs (in Rs.)": "500",
    "Industry (in Rs.)": "1000"
  },
  {
    "Name Of Equipment": "Twin-Jet Electropolisher",
    "Slot Duration / NO.of samples": "upto 3 sample (at Room Temp.)",
    "Academic & R&D Labs (in Rs.)": "2100",
    "Industry (in Rs.)": "4200"
  },
  {
    "Name Of Equipment": "Twin-jet Electropolisher",
    "Slot Duration / NO.of samples": "upto 3 sample(at Cryo Temp.)",
    "Academic & R&D Labs (in Rs.)": "2500",
    "Industry (in Rs.)": "5000"
  },
  {
    "Name Of Equipment": "Disc Punch (for 3.0 mm disc from ductile and soft materials,e.g., AI/Cu/other similar ductile foils or sheets with thickness<=150μm)",
    "Slot Duration / NO.of samples": "upto 5 sample",
    "Academic & R&D Labs (in Rs.)": "400",
    "Industry (in Rs.)": "800"
  }
];

const TEM_SampleColumns = [
  "Name Of Equipment",
  "Slot Duration / NO.of samples",
  "Academic & R&D Labs (in Rs.)",
  "Industry (in Rs.)"
];


const GuidelinesForEquipment = {
  "title": "",
  "pageContent": {
    "content": [
      {
        "type": "list",
        "para": "Guidelines to use the above equipment’s : ",
        "src": "",
        "alt": "",
        "items": ["Contact Analytical HRTEM Laboratory staff to discuss procedure and safety training."],
        "order": 1
      },
      {
        "type": "list",
        "para": "Terms And Condition for Metal 3D Printer are as follows : ",
        "src": "",
        "alt": "",
        "items": [
          "Metal/alloy powder shall be provided by user.",
          "CSIR-AMPRI will not be responsible for characterisitc properties of 3D printed components, as metal powder is procured from a third party.",
          "Samples/results will be delivered within 30 days after receiving the powder.",
          "Suitability of printing an alloy needs to be discussed with facility In-charge before taking the order/service.",
          "Printing of an alloy involves parameter optimization for printing; therefore actual time of printing may be higher in some cases, from the software calculated one."
        ],
        "order": 2
      },

    ],
    "tabs": []
  },

}

const GeneralTnC = {
  "title": "General Terms and Conditions",
  "pageContent": {
    "content": [
      {
        "type": "list",
        "para": "General Terms and Conditions : ",
        "src": "",
        "alt": "",
        "items": [
          "These charges are only for external users.",
          "Rates are exclusive of GST (GST will be as per government rates)",
          "Raw machine data will be provided to the users.",
          "Test results and data will be shared after verification of the payment from finance department of CSIR-AMPRI",
          "Sample collection after the measurement is responsibility of the user only, about which prior information during sample booking request need to be provided. Also User needs to arrange the pickup in own cost.",
          "The analytical data/Test results are provided only for research/ development purposes. These cannot be used as certificates in legal disputes.",
          "In case of bulk samples, testing can be taken up in project mode after discussion with the party, and due approval from the competent authority ",
          "Payment will be taken as per institute procedure",
          "These rates will supersede all the previous charges",
          "The charges for new facilities / upcoming testing facilities will be decided further on case to case basis.",
          "These charges are only for measurement / testing on the instruments and do not include analysis part.",
          "All the External samples measurement / testing request will be through ISTEM portal only",
          "Material Data Sheet/Information about Hazardous nature of the sample should be provided by external users wherever applicable.",
          "For further queries contact at istem-ampri@csir.res.in"
        ],
        "order": 1
      },


    ],
    "tabs": []
  },

}

function SAIF({ isAdmin }) {
  const [Columns, setColumns] = useState(null)
  const [Tabs, setTabs] = useState(null)
  const [Table, settable] = useState(null)


  useEffect(() => {
    const fieldMapping = {
      "name of equipment": "equipment",
      "Charges for academics institution(in Rs.)": "institutionCharge",
      "Charges for industry(in Rs.)": "industryCharge",
      "remarks": "remarks",
      "document": "document",
    };

    const { columns, processedData, table } = processTableData(tableData, fieldMapping);

    setColumns(columns);
    setTabs(processedData);
    settable(table);
  }, [])



  return (
    <div className="min-h-screen">
      <Topbar isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />

      {data && <ContentRenderer contentData={data} isAdmin={false} />}

      {Columns && Tabs && Columns.length > 0 && Tabs.length > 0 && <DataTable
        title="SAIF"
        columns={Columns}
        tabs={Tabs}
        entriesPerPageOptions={[10, 25, 50]}
        table={Table}
        isAdmin={true}
        from="SAIF"
      />}

      {TEM_SampleData && TEM_SampleColumns && TEM_SampleColumns.length > 0 && TEM_SampleData.length > 0 && <div>
        <DataTable
          title="TEM Sample Preparation Tools (Usage charges for external users)"
          columns={TEM_SampleColumns}
          data={TEM_SampleData}
          entriesPerPageOptions={[10, 25, 50]}

          isAdmin={false}
          from="TEM Sample"
        />

        {data && <ContentRenderer contentData={GuidelinesForEquipment} isAdmin={false} />}
      </div>}

      {data && <ContentRenderer contentData={GeneralTnC} isAdmin={false} />}

      <Footer />
      <div id="google_translate_element" className="invisible"></div>
    </div>
  )
}

export default SAIF