import { useState } from "react";
import "./App.css";
import HighlightDropdown from "./HighlightDropdown";

function App() {
  const subIndustries = [
    {
      id: "8efdbd4c-35b8-4468-8cbf-98c1b4b6d8b3",
      name: "Software",
      subIndustry: "Enterprise Resource Planning (ERP) Software",
    },
    {
      id: "a6607498-94f1-4aa5-bdb5-dff5ca5db0bb",
      name: "Transportation",
      subIndustry: "Trucking, Moving & Storage",
    },
    {
      id: "d75319a5-cbda-4917-aab2-9cc0c3cb70c1",
      name: "Software",
      subIndustry: "Engineering Software",
    },
    {
      id: "dffa1545-7929-46a6-922e-1c0c8ce93354",
      name: "Transportation",
      subIndustry: "Rail, Bus & Taxi",
    },
    {
      id: "1a7018cc-76c9-4b68-a44c-abe1d5adfffd",
      name: "Transportation",
      subIndustry: "Marine Shipping & Transportation",
    },
    {
      id: "29e040c0-5f12-419e-9db1-00ad6f66e6e6",
      name: "Transportation",
      subIndustry: "Freight & Logistics Services",
    },
    {
      id: "13491b17-4a0a-40d0-bc9e-f7cf073bbbd3",
      name: "Transportation",
      subIndustry: "Airlines, Airports & Air Services",
    },
    {
      id: "c33a8784-c2c0-45e3-b2e8-632937afa0ba",
      name: "Telecommunications",
      subIndustry: "Telephony & Wireless",
    },
    {
      id: "02750aca-5e30-41d1-8e86-1ffd64660d15",
      name: "Telecommunications",
      subIndustry:
        "Internet Service Providers, Website Hosting & Internet-related Services",
    },
    {
      id: "6c663f4e-d4cf-4edf-bed2-90719cb80ad2",
      name: "Telecommunications",
      subIndustry: "Cable & Satellite",
    },
    {
      id: "7505fd8f-beab-4a9c-9b03-3087eda0ae1d",
      name: "Software",
      subIndustry: "Supply Chain Management (SCM) Software",
    },
    {
      id: "23de2de4-1b16-423b-8785-d422e8bbc53b",
      name: "Software",
      subIndustry: "Storage & System Management Software",
    },
    {
      id: "0da6f499-b132-48c8-8771-b6f6be706066",
      name: "Software",
      subIndustry: "Security Software",
    },
    {
      id: "4b1d859f-839f-46f9-af64-bdcbeabe1a09",
      name: "Software",
      subIndustry: "Networking Software",
    },
    {
      id: "aecdd01a-9ab9-4b65-a5ea-4692543074b4",
      name: "Software",
      subIndustry: "Multimedia, Games & Graphics Software",
    },
    {
      id: "af2083c9-1ffb-45f4-9745-95359a76355c",
      name: "Software",
      subIndustry: "Mobile App Development",
    },
    {
      id: "3ffab4eb-696b-4034-b0e3-3a55693cfbf1",
      name: "Software",
      subIndustry: "Legal Software",
    },
    {
      id: "dc5007a1-ce73-4da1-9419-dcc5b5214780",
      name: "Software",
      subIndustry: "Human Resources Software",
    },
    {
      id: "ab84f0c4-6777-4891-bcb2-4f5ec4be6937",
      name: "Software",
      subIndustry: "Healthcare Software",
    },
    {
      id: "87786257-8180-46a7-b3e7-bbfb791a64bc",
      name: "Software",
      subIndustry: "Financial Software",
    },
    {
      id: "da1ceeaf-cdaf-47a2-8ad6-9a8dcd707ed9",
      name: "Software",
      subIndustry: "Customer Relationship Management (CRM) Software",
    },
    {
      id: "a1eb22fb-17fd-4edc-840c-d35ef615cc0d",
      name: "Software",
      subIndustry: "Database & File Management Software",
    },
    {
      id: "b3e82872-e145-413a-acc1-f14cc1018df7",
      name: "Finance",
      subIndustry: "Investment Banking",
    },
    {
      id: "6f79d424-4550-4d0b-b955-3d7d1bb35c17",
      name: "Finance",
      subIndustry: "Lending & Brokerage",
    },
    {
      id: "e2b2067f-3733-4e10-8418-42405b0a7edc",
      name: "Finance",
      subIndustry: "Venture Capital & Private Equity",
    },
    {
      id: "054dcfae-0832-4997-bca4-e9ca75527898",
      name: "Government",
      subIndustry: "Federal",
    },
    {
      id: "94834fa9-c4d7-46ce-ac6a-070b79bed352",
      name: "Government",
      subIndustry: "Local",
    },
    {
      id: "1d036a84-d602-4c14-b78c-54843e29ecba",
      name: "Government",
      subIndustry: "State",
    },
    {
      id: "4cf03e2a-db95-49e4-b508-540c0d7068ab",
      name: "Government",
      subIndustry: "Tribal Nations",
    },
    {
      id: "3055f41f-c296-44fd-a857-9dff53b99a5c",
      name: "Healthcare Services",
      subIndustry: "Ambulance Services",
    },
    {
      id: "7c14a666-edee-4a7e-a905-3227aa353a8f",
      name: "Healthcare Services",
      subIndustry: "Blood & Organ Banks",
    },
    {
      id: "9422cde5-d23e-4c86-8a4e-b5ca4dc2b7a7",
      name: "Healthcare Services",
      subIndustry: "Elderly Care Services",
    },
    {
      id: "d03e31b8-420b-4c61-9c17-d1b688c7f655",
      name: "Healthcare Services",
      subIndustry: "Medical Laboratories & Imaging Centers",
    },
    {
      id: "934fcb00-6c19-4b13-a2f5-0b1a037868d6",
      name: "Healthcare Services",
      subIndustry: "Mental Health & Rehabilitation Facilities",
    },
    {
      id: "04aea6ac-9bac-462b-b54e-7d121fb7fd28",
      name: "Healthcare Services",
      subIndustry: "Veterinary Services",
    },
    {
      id: "6efcbe38-fd90-4a89-a224-d4c77d122fc3",
      name: "Hospitality",
      subIndustry: "Amusement Parks, Arcades & Attractions",
    },
    {
      id: "172f65c1-1b4c-4c29-8219-28bccbd2d85a",
      name: "Hospitality",
      subIndustry: "Cultural & Informational Centers",
    },
    {
      id: "9fe9d2c8-3e6c-4a96-b523-3d313cb07d21",
      name: "Hospitality",
      subIndustry: "Fitness & Dance Facilities",
    },
    {
      id: "8c90e31a-d2cf-442e-9837-0e91f3114dd1",
      name: "Hospitality",
      subIndustry: "Gambling & Gaming",
    },
    {
      id: "439663d9-c96d-4923-b686-b02aa67f19c4",
      name: "Hospitality",
      subIndustry: "Libraries",
    },
    {
      id: "da3ecf2a-a4a6-4ce5-8703-5ab6f4099509",
      name: "Hospitality",
      subIndustry: "Lodging & Resorts",
    },
    {
      id: "e837a0c4-2c4e-442c-a749-e9d1a7f732f4",
      name: "Hospitality",
      subIndustry: "Movie Theaters",
    },
    {
      id: "59a36a53-489b-4b8f-ab86-ede91b0ad185",
      name: "Hospitality",
      subIndustry: "Museums & Art Galleries",
    },
    {
      id: "b54b727f-a846-410f-a0d3-a43f0098cc3f",
      name: "Hospitality",
      subIndustry: "Performing Arts Theaters",
    },
    {
      id: "aba62bea-c1e2-4a34-97a9-183f9eb58f35",
      name: "Hospitality",
      subIndustry: "Restaurants",
    },
    {
      id: "a579714f-7355-4256-beb1-fd9b426d4101",
      name: "Hospitality",
      subIndustry: "Sports Teams & Leagues",
    },
    {
      id: "dc1d94bb-1488-4114-b827-095ca925d711",
      name: "Hospitality",
      subIndustry: "Travel Agencies & Services",
    },
    {
      id: "f1064959-80bd-4270-b839-411500f5f829",
      name: "Hospitality",
      subIndustry: "Zoos & National Parks",
    },
    {
      id: "76b885fc-98e8-4fd1-93c5-a2f143bfc0f3",
      name: "Hospitals & Physicians Clinics",
      subIndustry: "Dental Offices",
    },
    {
      id: "ce0eb6d3-c688-4e59-856a-5178c18d2f12",
      name: "Hospitals & Physicians Clinics",
      subIndustry: "Medical & Surgical Hospitals",
    },
    {
      id: "640b5484-8265-4b14-a6ad-1662ccb6aa24",
      name: "Hospitals & Physicians Clinics",
      subIndustry: "Medical Specialists",
    },
    {
      id: "de505d74-8197-4a0e-a04d-9d5f4b15fa55",
      name: "Hospitals & Physicians Clinics",
      subIndustry: "Physicians Clinics",
    },
    {
      id: "33b4df4c-7ba4-45fa-9d1d-6eade7dec11c",
      name: "Manufacturing",
      subIndustry: "Aerospace & Defense",
    },
    {
      id: "8acac805-a9c7-4de2-adc0-427078ba53bd",
      name: "Manufacturing",
      subIndustry: "Appliances",
    },
    {
      id: "e7a88198-bdb7-43f2-8f48-cfbf17898291",
      name: "Manufacturing",
      subIndustry: "Automotive Parts",
    },
    {
      id: "3af59245-7ca8-41ed-95dd-b1b865812f9a",
      name: "Manufacturing",
      subIndustry: "Boats & Submarines",
    },
    {
      id: "e6aa2c60-4a5f-44a0-8ec0-e16d99bc8d47",
      name: "Manufacturing",
      subIndustry: "Building Materials",
    },
    {
      id: "d945eb53-de35-4315-8cb1-e25d5801b38a",
      name: "Manufacturing",
      subIndustry: "Chemicals & Related Products",
    },
    {
      id: "87caf808-07ec-48a1-9bd0-6c3ac01e566e",
      name: "Manufacturing",
      subIndustry: "Cleaning Products",
    },
    {
      id: "272f0d9b-96c9-4359-a685-191a11f67540",
      name: "Manufacturing",
      subIndustry: "Computer Equipment & Peripherals",
    },
    {
      id: "1ffbd3ab-6fa7-4573-bd2b-fc931f40b41e",
      name: "Manufacturing",
      subIndustry: "Cosmetics, Beauty Supply & Personal Care Products",
    },
    {
      id: "c07606c6-a14f-497d-bd76-6a04ecc95a59",
      name: "Manufacturing",
      subIndustry: "Electronics",
    },
    {
      id: "7d55102a-2a81-4e0a-83ce-a554449f76fd",
      name: "Manufacturing",
      subIndustry: "Food & Beverage",
    },
    {
      id: "72474bd6-fcb3-43f5-b9eb-fbacf8f1af50",
      name: "Manufacturing",
      subIndustry: "Furniture Manufacturing",
    },
    {
      id: "0ab6ad1b-50ee-4f6c-b47d-9ec8c3b18d69",
      name: "Manufacturing",
      subIndustry: "Glass & Clay",
    },
    {
      id: "14b2069d-d380-4f01-8e70-3fd9de4eccfe",
      name: "Manufacturing",
      subIndustry: "Hand, Power & Lawn-care Tools",
    },
    {
      id: "ea4916d4-9dd3-40b3-a2b8-27a493da2df3",
      name: "Manufacturing",
      subIndustry: "Health & Nutrition Products",
    },
    {
      id: "49d06f52-6e9f-4b42-ba0b-8d2bb769f0da",
      name: "Manufacturing",
      subIndustry: "Household Goods",
    },
    {
      id: "640657be-77ff-404c-9a10-3aef9fd8258a",
      name: "Manufacturing",
      subIndustry: "Industrial Machinery & Equipment",
    },
    {
      id: "07eb3617-3d62-474c-a90d-58cf3bc0b03e",
      name: "Manufacturing",
      subIndustry: "Medical Devices & Equipment",
    },
    {
      id: "7f3ea9cb-04f4-4ad9-a62c-8bb811c694b3",
      name: "Manufacturing",
      subIndustry: "Motor Vehicles",
    },
    {
      id: "ed7ff431-682f-4163-a1de-721366df6e5b",
      name: "Manufacturing",
      subIndustry: "Pet Products Manufacturing",
    },
    {
      id: "d0bbee13-f22d-4401-a7e0-efdb2ad0f619",
      name: "Manufacturing",
      subIndustry: "Pharmaceuticals",
    },
    {
      id: "f5ee66f6-f1aa-4b5a-ab81-93a22094099e",
      name: "Manufacturing",
      subIndustry: "Photographic & Optical Equipment",
    },
    {
      id: "2537e856-87a9-4e58-bd09-353b42fcf4a0",
      name: "Manufacturing",
      subIndustry: "Plastic, Packaging & Containers",
    },
    {
      id: "b2333f9b-d72c-4cb9-84e5-e33cc9abea75",
      name: "Manufacturing",
      subIndustry: "Pulp & Paper",
    },
    {
      id: "e1645a80-f630-4888-b192-fd8d4e7386cd",
      name: "Manufacturing",
      subIndustry: "Sporting Goods",
    },
    {
      id: "6f2a762a-684c-4e16-b015-e8cf6ad990f7",
      name: "Manufacturing",
      subIndustry: "Telecommunication Equipment",
    },
    {
      id: "8fef8a93-b1bb-4e24-90b5-9b09cc304ae9",
      name: "Manufacturing",
      subIndustry: "Textiles & Apparel",
    },
    {
      id: "dd097e07-59bd-4ba1-94f0-65e415cd25a8",
      name: "Manufacturing",
      subIndustry: "Tires & Rubber",
    },
    {
      id: "97440648-cda7-4d1a-9ff4-96f7e5d91832",
      name: "Manufacturing",
      subIndustry: "Toys & Games Manufacturing",
    },
    {
      id: "03b600ed-9bf2-42a7-a53b-09d95056acca",
      name: "Manufacturing",
      subIndustry: "Watches & Jewelry",
    },
    {
      id: "4de16952-daf3-42fc-bae8-69e49a5b43f5",
      name: "Manufacturing",
      subIndustry: "Wire & Cable",
    },
    {
      id: "858a19e8-f75d-4cdb-9957-9bfb6995e56b",
      name: "Media & Internet",
      subIndustry: "Broadcasting",
    },
    {
      id: "a095410d-a664-4edf-abbb-2070e6bcbba1",
      name: "Media & Internet",
      subIndustry: "Data Collection & Internet Portals",
    },
    {
      id: "ae548331-2e7d-4baf-bab8-af681105d669",
      name: "Media & Internet",
      subIndustry: "Music Production & Services",
    },
    {
      id: "d143a054-8466-4d02-b60f-5fe268cb76df",
      name: "Media & Internet",
      subIndustry: "Newspapers & News Services",
    },
    {
      id: "1567052b-c765-49b3-b4ea-534151ebf66c",
      name: "Media & Internet",
      subIndustry: "Publishing",
    },
    {
      id: "4e0fadfc-916e-4c24-80d3-0df815fcc0ab",
      name: "Media & Internet",
      subIndustry: "Social Networks",
    },
    {
      id: "57f603d3-2145-476b-9588-70420caa26ff",
      name: "Media & Internet",
      subIndustry: "Ticket Sales",
    },
    {
      id: "b44cc531-cfe5-45b8-8963-91605eb2b7d1",
      name: "Organizations",
      subIndustry: "Membership Organizations",
    },
    {
      id: "1e94fc28-0ed6-4e87-a970-50a310fec2c2",
      name: "Organizations",
      subIndustry: "Non-Profit & Charitable Organizations",
    },
    {
      id: "3c9262f6-a19f-4806-9c1b-a5aff588f9e4",
      name: "Organizations",
      subIndustry: "Religious Organizations",
    },
    {
      id: "08a98d0d-7082-4ef7-805f-86e461754821",
      name: "Retail",
      subIndustry: "Apparel & Accessories Retail",
    },
    {
      id: "235c2e94-8fbc-4039-9c81-cc5486f78812",
      name: "Retail",
      subIndustry: "Auctions",
    },
    {
      id: "ebeab10c-6be7-40c1-9ec3-f597ec96bce1",
      name: "Retail",
      subIndustry: "Automobile Dealers",
    },
    {
      id: "f20af8e6-afcb-4e69-b891-c489e3273f50",
      name: "Retail",
      subIndustry: "Automobile Parts Stores",
    },
    {
      id: "f66fe89b-f258-4828-9d8b-f8fef88ee4aa",
      name: "Retail",
      subIndustry: "Consumer Electronics & Computers Retail",
    },
    {
      id: "ab5afb33-5ca9-497b-8cb2-6755486aa6b1",
      name: "Retail",
      subIndustry: "Convenience Stores, Gas Stations & Liquor Stores",
    },
    {
      id: "a0e416ec-3b5b-4859-b146-c392dbb18d5d",
      name: "Retail",
      subIndustry: "Department Stores, Shopping Centers & Superstores",
    },
    {
      id: "f04a4f9d-9122-4267-80b9-902ea370018d",
      name: "Retail",
      subIndustry: "Drug Stores & Pharmacies",
    },
    {
      id: "81158b3d-a2b5-4620-9273-09be1fc6e036",
      name: "Retail",
      subIndustry: "Flowers, Gifts & Specialty Stores",
    },
    {
      id: "44d444af-30d4-4eb2-870d-5fffa05d4345",
      name: "Retail",
      subIndustry: "Grocery Retail",
    },
    {
      id: "3f2ffaeb-1da0-449a-b3e9-01ce7ba7f854",
      name: "Retail",
      subIndustry: "Home Improvement & Hardware Retail",
    },
    {
      id: "9a7f35d8-430c-4eb4-818b-fbc282a6013d",
      name: "Retail",
      subIndustry: "Jewelry & Watch Retail",
    },
    {
      id: "d0aa8788-70f2-440b-aac6-379be76c6c97",
      name: "Retail",
      subIndustry: "Office Products Retail & Distribution",
    },
    {
      id: "f53ae564-a00d-4229-b4b3-7acf58143009",
      name: "Retail",
      subIndustry:
        "Other Rental Stores (Furniture, A/V, Construction & Industrial Equipment)",
    },
    {
      id: "fcae7441-cc3a-4f3d-a46c-2b4d1d966154",
      name: "Retail",
      subIndustry: "Record, Video & Book Stores",
    },
    {
      id: "a672c22b-f8e9-4495-ae1f-bd2ca9b3bb33",
      name: "Retail",
      subIndustry: "Sporting & Recreational Equipment Retail",
    },
    {
      id: "052db1ac-5b6d-4687-8c3a-d3b367cb658a",
      name: "Retail",
      subIndustry: "Vitamins, Supplements & Health Stores",
    },
    {
      id: "ba63f383-2976-422c-9e37-3cc5e4a39882",
      name: "Retail",
      subIndustry: "Retail Furniture",
    },
    {
      id: "6e7c5a6f-5480-4ab7-91c0-42b6b6a56541",
      name: "Retail",
      subIndustry: "Pet Products Retailer",
    },
    {
      id: "e52a144d-505c-4646-bf22-e540a4e7c059",
      name: "Retail",
      subIndustry: "Toys & Games Retailer",
    },
    {
      id: "a098e5fc-5456-48e0-b063-9a75bb60e250",
      name: "Software",
      subIndustry: "Business Intelligence (BI) Software",
    },
    {
      id: "77bdfd47-add5-4302-8753-c96f6d3cd1b8",
      name: "Software",
      subIndustry: "Content & Collaboration Software",
    },
    {
      id: "5081e6d7-479e-49d7-aaf9-94e52bb739d9",
      name: "Manufacturing",
      subIndustry: "Test & Measurement Equipment",
    },
    {
      id: "621ba7aa-3f8a-4176-970f-5a30b2e41786",
      name: "Construction",
      subIndustry: "Civil Engineering Construction",
    },
    {
      id: "5a1dc2a8-dec7-4919-865f-5650a30c20dc",
      name: "Construction",
      subIndustry: "Commercial & amp & Residential Construction",
    },
    {
      id: "2460ccc2-5ff4-440e-a0fc-d37af53082b6",
      name: "Consumer Services",
      subIndustry: "Automotive Service & Collision Repair",
    },
    {
      id: "087f5093-44e9-48e8-9729-cd3df86562e0",
      name: "Consumer Services",
      subIndustry: "Barber Shops & Beauty Salons",
    },
    {
      id: "d335efe9-72b5-499c-821c-f92e2de75832",
      name: "Consumer Services",
      subIndustry: "Car & Truck Rental",
    },
    {
      id: "4cee369f-1382-41af-9be8-a4c8fd994968",
      name: "Consumer Services",
      subIndustry: "Childcare",
    },
    {
      id: "d0083b5f-6f80-4aa8-8411-995f6e77015e",
      name: "Consumer Services",
      subIndustry: "Cleaning Services",
    },
    {
      id: "6e10eed2-8b13-4d3c-ae34-bb642f7e27b0",
      name: "Consumer Services",
      subIndustry: "Funeral Homes & Funeral Related Services",
    },
    {
      id: "c2131b2d-13d6-4e19-a5ac-ea9b87089735",
      name: "Consumer Services",
      subIndustry: "Landscape Services",
    },
    {
      id: "b7cd5c97-5a8d-472e-b092-b6a02cfed552",
      name: "Consumer Services",
      subIndustry: "Photography Studio",
    },
    {
      id: "8325e72c-cd7f-493c-a701-e131a35c3711",
      name: "Consumer Services",
      subIndustry: "Repair Services",
    },
    {
      id: "b94d586d-b2db-45ad-a921-2bc18de08d5e",
      name: "Consumer Services",
      subIndustry: "Weight & Health Management",
    },
    {
      id: "56860d78-11ce-49c0-8fd4-d9f5f0f4d323",
      name: "Education",
      subIndustry: "Colleges & Universities",
    },
    {
      id: "692bb10f-86a7-4e9f-8ecf-986ffdbde010",
      name: "Education",
      subIndustry: "K-12 Schools",
    },
    {
      id: "aeb465ce-be93-426a-b152-0156341b03ea",
      name: "Education",
      subIndustry: "Training",
    },
    {
      id: "7f9711ce-a1db-4199-92a3-0a9eb58117f7",
      name: "Energy, Utilities & Waste",
      subIndustry: "Electricity, Oil & Gas",
    },
    {
      id: "5263270a-dbe4-4426-ad5a-b27e8df5f536",
      name: "Energy, Utilities & Waste",
      subIndustry: "Oil & Gas Exploration & Services",
    },
    {
      id: "1a367fc1-4956-4ac9-a625-b48f06b0084b",
      name: "Energy, Utilities & Waste",
      subIndustry: "Waste Treatment, Environmental services & recycling",
    },
    {
      id: "574aed8b-ccf9-45e8-849c-47b8cf094168",
      name: "Energy, Utilities & Waste",
      subIndustry: "Water Treatment",
    },
    {
      id: "7e9aa5cf-dc95-4d62-9da2-9aed770ed7e1",
      name: "Finance",
      subIndustry: "Banking",
    },
    {
      id: "2dbc78a5-d1db-4760-b31a-22fdf765b3f7",
      name: "Finance",
      subIndustry: "Credit Cards & Transaction Processing",
    },
    {
      id: "a1ff9ded-70cc-4ed7-b328-e5931732813c",
      name: "Agriculture",
      subIndustry: "Animals & Livestock",
    },
    {
      id: "aac94e48-91fa-4c2b-b66f-c3c61f64a85e",
      name: "Construction",
      subIndustry: "Architecture, Engineering & amp & Design",
    },
    {
      id: "e08f6025-9bbc-4ce7-91ff-284c2986c8cb",
      name: "Business Services",
      subIndustry: "Translation & Linguistic Services",
    },
    {
      id: "79f5bba2-f609-430e-92cf-24197902789b",
      name: "Business Services",
      subIndustry: "Security Products & Services",
    },
    {
      id: "4288a57f-4683-4104-a924-7d4788bd8ad9",
      name: "Business Services",
      subIndustry: "Research & Development",
    },
    {
      id: "5db03e69-4adf-4d38-81c2-3d7a197e70eb",
      name: "Business Services",
      subIndustry: "Multimedia & Graphic Design",
    },
    {
      id: "ff7fe946-3279-4437-9e55-7d51cd3fcd0c",
      name: "Business Services",
      subIndustry: "Management Consulting",
    },
    {
      id: "29adfdce-e439-4ad9-9cc1-bbe10586fd50",
      name: "Business Services",
      subIndustry: "Information & Document Management",
    },
    {
      id: "4d0a32a7-acf0-46a2-870d-91c299f5cc6f",
      name: "Business Services",
      subIndustry: "HR & Staffing",
    },
    {
      id: "af35624c-7028-42dd-be91-93df38c1f211",
      name: "Business Services",
      subIndustry: "Food Service",
    },
    {
      id: "87786bcf-c50a-4306-88eb-a3cfecdf91a2",
      name: "Business Services",
      subIndustry: "Facilities Management & Commercial Cleaning",
    },
    {
      id: "5cc11050-e90e-43a4-b073-6f437b8d5a72",
      name: "Business Services",
      subIndustry: "Debt Collection",
    },
    {
      id: "f84efe94-c933-4176-910b-57a7eaa52bdc",
      name: "Business Services",
      subIndustry: "Custom Software & IT Services",
    },
    {
      id: "a0d002a1-8b85-4477-b000-a5796464d804",
      name: "Business Services",
      subIndustry: "Commercial Printing",
    },
    {
      id: "34d4300d-ee10-4d5c-9df8-b2297a79d3dc",
      name: "Business Services",
      subIndustry: "Chambers of Commerce",
    },
    {
      id: "e20d56aa-badd-474e-a74b-f7e9446b8519",
      name: "Business Services",
      subIndustry: "Call Centers & Business Centers",
    },
    {
      id: "5452f2cc-2e47-40d2-9441-01a6d966012f",
      name: "Business Services",
      subIndustry: "Advertising & Marketing",
    },
    {
      id: "ce1788b6-d8bc-4a58-a7c9-dc9203a4ca9a",
      name: "Business Services",
      subIndustry: "Accounting Services",
    },
    {
      id: "96af55fc-d5f3-47a9-9cc4-7738a489d858",
      name: "Agriculture",
      subIndustry: "Forestry",
    },
    {
      id: "da3a746f-b390-4c65-8e60-c06838a9a617",
      name: "Agriculture",
      subIndustry: "Crops",
    },
  ];
  const [selectedValues, setSelectedValue] = useState([]);

  const data = [];
  subIndustries.forEach((value) => {
    data.push({
      id: value.id,
      groupName: value.name,
      name: value.subIndustry,
    });
  });

  return (
    <div className="App">
      <HighlightDropdown
        dropdownData={data}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValue}
        placeholder="Select Industries"
        size="small"
        browsePopupTitle="Industries"
      />
    </div>
  );
}

export default App;
