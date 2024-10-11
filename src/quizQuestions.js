const fullQuizQuestions = [
    {
      question: "Define Ayruveda:",
      options: [
        "A modern Western skincare technique",
        "An ancient Indian approach to skincare, science of life",
        "A type of chemical peel",
        "A brand of cosmetics"
      ],
      correctAnswer: 1
    },
    {
      question: "Define OHM:",
      options: [
        "A meditation technique",
        "A skincare brand",
        "The unit of electrical resistance",
        "A type of facial massage"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the skeletal structure that protects heart, lungs, and internal organs?",
      options: ["Cranium", "Pelvis", "Thorax", "Vertebrae"],
      correctAnswer: 2
    },
    {
      question: "Difference in men's facial?",
      options: ["Skin thickness", "Pore size", "Direction of hair growth", "Oil production"],
      correctAnswer: 2
    },
    {
      question: "Define VOLT:",
      options: [
        "The unit of electrical current",
        "The base unit of potential electrical resistance",
        "The measurement of electrical power",
        "The speed of electrical flow"
      ],
      correctAnswer: 1
    },
    {
      question: "What is Keratosis?",
      options: [
        "A skin condition marked by a horny growth",
        "A bacterial skin infection",
        "A type of chemical exfoliation",
        "An autoimmune disorder"
      ],
      correctAnswer: 0
    },
    {
      question: "What are the 11 body systems?",
      options: [
        "Skeletal, Muscular, Circulatory, Respiratory, Nervous, Endocrine, Immune, Digestive, Urinary, Reproductive, Integumentary",
        "Muscular, Endocrine, Excretory, Reproductive, Nervous, Digestive, Circulatory, Immune, Respiratory, Skeletal, Integumentary",
        "Circulatory, Digestive, Immune, Nervous, Skeletal, Reproductive, Muscular, Endocrine, Integumentary, Excretory, Respiratory",
        "Skeletal, Integumentary, Circulatory, Respiratory, Endocrine, Muscular, Immune, Nervous, Digestive, Excretory, Reproductive"
      ],
      correctAnswer: 3
    },
    {
      question: "What peel does the coagulation of protein in the skin cause the skin to frost?",
      options: ["Glycolic", "Lactic", "TCA", "Salicylic"],
      correctAnswer: 2
    },
    {
      question: "What is applied after a depilatory wax?",
      options: ["Petroleum", "Aloe vera", "Cool compress", "Moisturizer"],
      correctAnswer: 0
    },
    {
      question: "With laser, which hair color isn't effective?",
      options: ["Black", "Brown", "Blonde", "Gray"],
      correctAnswer: 3
    },
    {
      question: "What are enzymes?",
      options: [
        "Fat-dissolving agents",
        "Protein-dissolving agents",
        "Water-soluble vitamins",
        "Chemical exfoliants"
      ],
      correctAnswer: 1
    },
    {
      question: "Which is stronger: sterilization or disinfection?",
      options: ["Sterilization", "Disinfection", "They are the same", "Neither"],
      correctAnswer: 0
    },
    {
      question: "Define Dermal Scattering.",
      options: [
        "A type of skin condition",
        "Epidermis separating from the dermis during laser treatment",
        "A technique for tattoo removal",
        "A process in microdermabrasion"
      ],
      correctAnswer: 1
    },
    {
      question: "What massage movement do you use to apply moisturizer?",
      options: ["Effleurage", "Petrissage", "Tapotement", "Friction"],
      correctAnswer: 0
    },
    {
      question: "How should wax be applied?",
      options: [
        "At a 90-degree angle",
        "At a 45-degree angle",
        "Parallel to the skin",
        "In circular motions"
      ],
      correctAnswer: 1
    },
    {
      question: "What is endermologie?",
      options: [
        "A type of chemical peel",
        "A skin tightening treatment",
        "A cellulite treatment",
        "A method for permanent hair removal"
      ],
      correctAnswer: 2
    },
    {
      question: "What is a circuit?",
      options: [
        "The flow of water",
        "The flow of electrical current",
        "A path for air flow",
        "A skincare technique"
      ],
      correctAnswer: 1
    },
    {
      question: "Define Micropigmentation. What is it used for?",
      options: [
        "A temporary tattoo technique",
        "A method for skin resurfacing",
        "Permanent cosmetics for eyebrows, eyeliners, and lips",
        "A type of laser treatment"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the main purpose of cotton compresses?",
      options: ["Exfoliation", "Moisturizing", "Mask removal", "Skin toning"],
      correctAnswer: 2
    },
    {
      question: "What is a microsponge?",
      options: [
        "A type of exfoliant",
        "A facial cleansing device",
        "A delivery system for active ingredients",
        "A type of mask"
      ],
      correctAnswer: 2
    },
    {
      question: "Microdermabrasion machines use diamond tip, aluminum corundum, and what?",
      options: ["Silica crystals", "Sugar crystals", "Aluminum oxide crystals", "Salt"],
      correctAnswer: 2
    },
    {
      question: "What is the main purpose of body wraps?",
      options: ["Relaxation", "Moisturizing", "Detoxification", "Exfoliation"],
      correctAnswer: 2
    },
    {
      question: "What regulates the strength of an electric current?",
      options: ["Resistor", "Capacitor", "Circuit breaker", "Transformer"],
      correctAnswer: 2
    },
    {
      question: "What is natural immunity?",
      options: [
        "Immunity acquired through vaccines",
        "Immunity developed after recovering from a disease",
        "Your body's natural defense to foreign invaders",
        "Immunity passed from mother to child"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the most common skin cancer?",
      options: ["Melanoma", "Squamous cell carcinoma", "Basal Cell Carcinoma", "Merkel cell carcinoma"],
      correctAnswer: 2
    },
    {
      question: "Which ingredient does not require specifics in cosmetic labeling?",
      options: ["Active ingredients", "Preservatives", "Fragrance", "Dyes"],
      correctAnswer: 2
    },
    {
      question: "Define pityriasis rosaca:",
      options: [
        "A type of fungal infection",
        "A bacterial skin condition",
        "Red patches of skin that may be round or oval",
        "A form of skin cancer"
      ],
      correctAnswer: 2
    },
    {
      question: "Know what Neutrons, Protons, and Electrons are:",
      options: [
        "Neutrons are neutrally charged, Protons are positive charged, and Electrons are negatively charged",
        "Neutrons are positively charged, Protons are negatively charged, and Electrons are neutral",
        "Protons are positively charged, Electrons are neutral, and Neutrons are negatively charged",
        "All are neutrally charged"
      ],
      correctAnswer: 0
    },
    {
      question: "Where does the skin get its main source of nutrients?",
      options: ["The air", "The blood", "Topical creams", "Skin cells"],
      correctAnswer: 1
    },
    {
      question: "What does the FDA define cosmetics as?",
      options: [
        "Products that alter the skin structure",
        "For cleansing, beautifying, and promoting attractiveness",
        "For medical treatment of skin conditions",
        "All of the above"
      ],
      correctAnswer: 1
    },
    {
      question: "How long do you have to wait for a Restylane injection after microdermabrasion?",
      options: ["1-2 days", "3-4 days", "1 week", "2 weeks"],
      correctAnswer: 0
    },
    {
      question: "How long do you have to wait for a microdermabrasion treatment after Restylane injections?",
      options: ["1 day", "1 week", "2 weeks", "3 weeks"],
      correctAnswer: 2
    },
    {
      question: "What laser does laser resurfacing?",
      options: ["ND:YAG", "CO2 or Erbium", "Alexandrite", "Diode"],
      correctAnswer: 1
    },
    {
      question: "What is a histamine?",
      options: [
        "A type of enzyme",
        "A cell that triggers the inflammatory response",
        "A skin condition",
        "A type of facial massage"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the medical term for a cluster of boils?",
      options: ["Furuncle", "Carbuncle", "Papule", "Pustule"],
      correctAnswer: 1
    },
    {
      question: "What muscle would be massaged during a facial massage?",
      options: ["Biceps", "Trapezius", "Platysma", "Deltoid"],
      correctAnswer: 2
    },
    {
      question: "What is the Pilosebaceous unit referred to as?",
      options: ["Hair follicle", "Sweat gland", "Sebaceous gland", "Epidermis"],
      correctAnswer: 0
    },
    {
      question: "What are conductors and insulators?",
      options: [
        "Materials that create heat and cold",
        "Materials that allow and restrict the flow of electricity",
        "Materials used in facials",
        "Types of skin conditions"
      ],
      correctAnswer: 1
    },
    {
      question: "What are Melanosomes?",
      options: [
        "Cells that produce sebum",
        "Granules filled with melanin",
        "Types of skin cells",
        "Proteins in the skin"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a retinoic acid?",
      options: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin E"],
      correctAnswer: 1
    },
    {
      question: "Define Electrolysis:",
      options: [
        "A method of temporary hair removal",
        "A method of permanent hair removal",
        "A chemical peel",
        "A type of laser treatment"
      ],
      correctAnswer: 1
    },
    {
      question: "What is photothermolysis?",
      options: [
        "A chemical reaction in skincare",
        "When a laser light is used to remove hair with heat",
        "A method of massaging the skin",
        "A cooling technique in laser therapy"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the most stimulating massage movement?",
      options: ["Effleurage", "Petrissage", "Tapotement", "Friction"],
      correctAnswer: 2
    },
    {
      question: "Why is it important to let the client rest after a body treatment?",
      options: [
        "To enhance skin absorption",
        "To regain equilibrium",
        "To cool down the body",
        "To allow products to settle"
      ],
      correctAnswer: 1
    },
    {
      question: "What are Restylane injections made of?",
      options: ["Collagen", "Botulinum toxin", "Hyaluronic Acid", "Silicone"],
      correctAnswer: 2
    },
    {
      question: "Who cannot receive high frequency?",
      options: ["People with sensitive skin", "People with pacemakers", "Pregnant women", "All of the above"],
      correctAnswer: 1
    },
    {
      question: "What is OSHA?",
      options: [
        "An organization regulating skincare standards",
        "An organization that certifies estheticians",
        "An organization that regulates safety in the workplace",
        "A skincare product brand"
      ],
      correctAnswer: 2
    },
    {
      question: "Define sudoriferous glands:",
      options: [
        "Glands that produce sebum",
        "Glands that produce sweat",
        "Glands that produce hormones",
        "Glands that produce oil"
      ],
      correctAnswer: 1
    },
    {
      question: "What is scabies caused by?",
      options: ["Bacteria", "Parasites", "Fungi", "Virus"],
      correctAnswer: 1
    },
    {
      question: "What is pathogenic?",
      options: [
        "Non-disease causing bacteria",
        "Disease causing bacteria",
        "A method of hair removal",
        "A skincare treatment"
      ],
      correctAnswer: 1
     },
     {
        question: "Define peptides.",
        options: [
            "Short polymers of amino acids linked by peptide bonds",
            "Chains of proteins that cause skin reactions",
            "A type of moisturizer",
            "A chemical exfoliant"
         ],
         correctAnswer: 0
        },
        {
          question: "What is Cushing's disease?",
          options: [
            "A skin disorder causing red patches",
            "Disease of the adrenal gland where it produces too much hydrocortisone",
            "A fungal infection",
            "A condition that affects bone density"
          ],
          correctAnswer: 1
        },
        {
          question: "Define Hypothalamus.",
          options: [
            "Gland that controls metabolism",
            "Gland that controls emotions",
            "Gland that coordinates hormone production & release from the base of the brain",
            "Gland that regulates heart rate"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the minimum peel that penetrates into the papillary layer?",
          options: ["Superficial peel", "Medium-depth peel", "Deep peel", "Enzyme peel"],
          correctAnswer: 1
        },
        {
          question: "What are Desmosomes?",
          options: [
            "Cells that produce collagen",
            "Connectors of the epidermal tissue",
            "A type of protein in the skin",
            "Specialized nerve endings"
          ],
          correctAnswer: 1
        },
        {
          question: "Define Xerosis.",
          options: [
            "Excessively oily skin",
            "Abnormally dry skin",
            "A bacterial infection",
            "A type of dermatitis"
          ],
          correctAnswer: 1
        },
        {
          question: "What are some contraindications for microdermabrasion?",
          options: [
            "Rosacea, sensitive skin, open wounds",
            "Dry skin, oily skin, large pores",
            "Sunburn, dark skin tones, scars",
            "Wrinkles, sun damage, mature skin"
          ],
          correctAnswer: 0
        },
        {
          question: "What is aromatherapy?",
          options: [
            "Therapy using massage techniques",
            "Therapy using essential oils and fragrances",
            "Therapy using electrical currents",
            "Therapy using light waves"
          ],
          correctAnswer: 1
        },
        {
          question: "When a thermal mask cools, it does what?",
          options: [
            "Softens the skin",
            "Hydrates the skin",
            "Tightens and tones the skin",
            "Exfoliates the skin"
          ],
          correctAnswer: 2
        },
        {
          question: "Where on the body are the most sudoriferous glands?",
          options: [
            "Arms and legs",
            "Palms of hands, soles of feet, underarms, and groin",
            "Face and neck",
            "Back and shoulders"
          ],
          correctAnswer: 1
        },
        {
          question: "What can be applied to the skin?",
          options: ["Antibiotics", "Moisturizers", "Antiseptics", "Oils"],
          correctAnswer: 2
        },
        {
          question: "Where do hair follicles originate from?",
          options: ["Epidermis", "Dermis", "Subcutaneous layer", "Hair shaft"],
          correctAnswer: 1
        },
        {
          question: "What does inorganic mean?",
          options: [
            "Comprised of matter not arising from natural growth or living organism",
            "Contains carbon",
            "Derived from plants",
            "Produced through photosynthesis"
          ],
          correctAnswer: 0
        },
        {
          question: "Contraindication for seaweed wrap.",
          options: ["Rosacea", "Sensitive skin", "Iodine allergy", "Acne"],
          correctAnswer: 2
        },
        {
          question: "Name some body wrap contraindications.",
          options: [
            "Rosacea, eczema, psoriasis",
            "Pregnancy, burns, diabetes",
            "Dry skin, oily skin, sunburn",
            "Open wounds, bruising, dry skin"
          ],
          correctAnswer: 1
        },
        {
          question: "After Rhinoplasty, the esthetician should substitute what instead of doing extractions on the nose?",
          options: ["Chemical peel", "Microdermabrasion", "Enzyme peel", "Mask"],
          correctAnswer: 2
        },
        {
          question: "What holds products together?",
          options: ["Humectants", "Preservatives", "Emulsifiers", "Antioxidants"],
          correctAnswer: 2
        },
        {
          question: "Light skin is not a contraindication of what?",
          options: ["Chemical peels", "Microdermabrasion", "IPL (Intense Pulsed Light)", "Laser resurfacing"],
          correctAnswer: 2
        },
        {
          question: "What makes up the pliability of the skin?",
          options: ["Collagen", "Keratin", "Elastin", "Hyaluronic Acid"],
          correctAnswer: 2
        },
        {
          question: "Define Algotherapy.",
          options: [
            "A method of electrolysis",
            "Therapeutic use of algae in treatments",
            "A form of massage therapy",
            "Laser therapy for pigmentation"
          ],
          correctAnswer: 1
        },
        {
          question: "Lasers use a form of what?",
          options: ["Ultraviolet light", "Polarized light", "Infrared light", "Visible light"],
          correctAnswer: 1
        },
        {
          question: "What is a silicone?",
          options: [
            "A natural oil extracted from plants",
            "A compound used in aromatherapy",
            "An inert, synthetic compound used in skincare",
            "A type of essential oil"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the sex hormone that produces elastin and collagen?",
          options: ["Testosterone", "Estrogen", "Progesterone", "Melatonin"],
          correctAnswer: 1
        },
        {
          question: "Define eccrine glands. Where are they located?",
          options: [
            "Glands that produce oil; located in the scalp",
            "Glands that produce sweat; located all over the body",
            "Glands that produce hormones; located in the endocrine system",
            "Glands that produce collagen; located in the skin"
          ],
          correctAnswer: 1
        },
        {
          question: "How many facial bones are there?",
          options: ["12", "14", "16", "18"],
          correctAnswer: 1
        },
        {
          question: "What is a contraindication of Fibromyalgia?",
          options: ["Massage", "Body Wraps", "Light therapy", "Microdermabrasion"],
          correctAnswer: 1
        },
        {
          question: "What needs to be done when using a woods lamp?",
          options: [
            "Turn all the lights on",
            "Use a magnifying glass",
            "Turn all the lights off",
            "Apply a chemical peel"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the most common form of cleaning in the spa?",
          options: ["Sterilization", "Sanitation", "Antiseptics and Disinfectants", "Exfoliation"],
          correctAnswer: 2
        },
        {
          question: "What is skin nourished by?",
          options: ["Moisturizers", "Water", "Blood and Lymph", "Topical serums"],
          correctAnswer: 2
        },
        {
          question: "What layer does microdermabrasion work on?",
          options: ["Stratum Corneum", "Dermis", "Epidermis", "Subcutaneous"],
          correctAnswer: 0
        },
        {
          question: "Define Apocrine glands. Where are they located?",
          options: [
            "Glands that produce sweat; located in the scalp",
            "Glands that produce sebum; located in the dermis",
            "Glands that produce sweat; located in underarm and groin areas",
            "Glands that produce hormones; located in the brain"
          ],
          correctAnswer: 2
        },
        {
          question: "What do body secretions do for us?",
          options: [
            "Hydrate the skin",
            "Fight bacteria",
            "Exfoliate dead skin cells",
            "Balance pH levels"
          ],
          correctAnswer: 1
        },
        {
          question: "What is high frequency?",
          options: ["Direct current", "Alternating current", "Steady current", "Static electricity"],
          correctAnswer: 1
        },
        {
          question: "What does the androgen hormone do?",
          options: [
            "Increases skin elasticity",
            "Decreases sebum production",
            "Responsible for oily skin and acne",
            "Helps with collagen production"
          ],
          correctAnswer: 2
        },
        {
          question: "Jetted hose with steam and water used from 10-12 feet away in water therapy treatments.",
          options: ["Scotch hose", "Steam wand", "Spray nozzle", "Hydrotherapy jet"],
          correctAnswer: 0
        },
        {
          question: "What do sensory nerves do?",
          options: [
            "Control muscle movements",
            "Send signals to glands",
            "Gather information from the environment and send it to your brain",
            "Control reflexes"
          ],
          correctAnswer: 2
        },
        {
          question: "Define HERTZ.",
          options: [
            "Unit of voltage",
            "Unit of electrical resistance",
            "Unit of frequency, equal to one cycle per second",
            "Unit of energy"
          ],
          correctAnswer: 2
        },
        {
          question: "How long do you have to wait for a chemical peel after laser resurfacing?",
          options: ["1 week", "2 weeks", "3 weeks", "1 month"],
          correctAnswer: 2
        },
        {
          question: "What does smoking do to the skin?",
          options: [
            "Increases collagen production",
            "Restricts oxygen and depletes Vitamin C",
            "Prevents wrinkles",
            "Improves skin tone"
          ],
          correctAnswer: 1
        },
        {
          question: "What does organic mean?",
          options: [
            "Substances that contain carbon bonds",
            "Substances that are water-soluble",
            "Substances that are man-made",
            "Substances that do not contain carbon"
          ],
          correctAnswer: 0
        },
        {
          question: "Levels of Decontamination:",
          options: [
            "Sanitation, Disinfection, Sterilization",
            "Cleaning, Rinsing, Disinfecting",
            "Washing, Sanitizing, Disinfecting",
            "Disinfection, Sterilization, Purification"
          ],
          correctAnswer: 0
        },
        {
          question: "What is Vasodilation?",
          options: [
            "Increase in blood flow",
            "Decrease in blood flow",
            "Constriction of blood vessels",
            "Relaxation of muscles"
          ],
          correctAnswer: 0
        },
        {
          question: "Define Viscosity.",
          options: [
            "The thickness or thinness of a liquid",
            "The rate at which a liquid evaporates",
            "The measure of a liquid's ability to conduct electricity",
            "The color of a liquid"
          ],
          correctAnswer: 0
        },
        {
          question: "What skin type is most sensitive to peels?",
          options: ["Caucasian", "African American", "Asian", "Hispanic"],
          correctAnswer: 2
        },
        {
          question: "A snake-like lesion.",
          options: ["Serpiginous", "Plaque", "Nodule", "Pustule"],
          correctAnswer: 0
        },
        {
          question: "What is another name for the Herpes Simplex virus?",
          options: ["Cold sores", "Chickenpox", "Fever blisters", "Canker sores"],
          correctAnswer: 0
        },
        {
          question: "Examples of ceramides?",
          options: [
            "Sphingolipids or glycosphingolipids",
            "Proteins and enzymes",
            "Vitamins and minerals",
            "Essential oils"
          ],
          correctAnswer: 0
        },
        {
          question: "Define Mammoplasty:",
          options: [
            "Breast augmentation",
            "A skin tightening procedure",
            "A chemical peel",
            "A facial massage technique"
          ],
          correctAnswer: 0
        },
        {
          question: "What layer does a deep phenol peel affect?",
          options: ["Stratum Corneum", "Dermis", "Papillary Dermis", "Subcutaneous"],
          correctAnswer: 2
        },
        {
          question: "What is an acidic product on the PH scale?",
          options: ["0-6.9", "7", "7.1-14", "Above 9"],
          correctAnswer: 0
        },
        {
          question: "Know your Fitzpatrick skin types and which ones benefit from lasers.",
          options: [
            "1 and 2",
            "3 and 4",
            "2 and 3",
            "5 and 6"
          ],
          correctAnswer: 2
        },
        {
          question: "What is microcurrent?",
          options: [
            "A type of laser treatment",
            "Wave therapy that retrains facial muscles",
            "A form of chemical exfoliation",
            "A massage technique"
          ],
          correctAnswer: 1
        },
        {
          question: "What is Hypothyroidism?",
          options: [
            "Too little production of thyroid hormones",
            "Too much production of adrenal hormones",
            "Inflammation of the thyroid gland",
            "Overproduction of insulin"
          ],
          correctAnswer: 0
        },
        {
          question: "What is Balneotherapy?",
          options: ["Therapy by mud", "Therapy by oils", "Therapy by baths", "Therapy by steam"],
          correctAnswer: 2
        },
        {
          question: "Define fissure:",
          options: ["A crack in the epidermis", "A crack in the dermis", "A type of scar", "A bacterial infection"],
          correctAnswer: 1
        },
        {
          question: "What layer does a light peel affect?",
          options: ["Stratum Corneum", "Stratum Spinosum", "Dermis", "Subcutaneous"],
          correctAnswer: 0
        },
        {
          question: "What is an antigen?",
          options: [
            "A foreign invader",
            "A type of skin cell",
            "A hormone",
            "A vitamin"
          ],
          correctAnswer: 0
        },
        {
          question: "What skin types contraindicate laser treatments?",
          options: [
            "Fitzpatrick I and II",
            "Fitzpatrick III and IV",
            "Fitzpatrick V and VI",
            "All skin types"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the body's largest organ?",
          options: ["Liver", "Heart", "Brain", "Skin"],
          correctAnswer: 3
        },
        {
          question: "What is vitiligo?",
          options: [
            "A skin infection",
            "A condition characterized by white patches due to loss of pigment",
            "A type of cancer",
            "A fungal infection"
          ],
          correctAnswer: 1
        },
        {
          question: "In what layer can melanocytes be found?",
          options: [
            "Stratum Corneum",
            "Stratum Spinosum",
            "Basal Layer",
            "Dermis"
          ],
          correctAnswer: 2
        },
            {
              question: "How would you do a proper tweezing?",
              options: [
                "Pull in the direction of hair growth",
                "Pull against the direction of hair growth",
                "Pull in circular motions",
                "Pluck multiple hairs at once"
              ],
              correctAnswer: 0
            },
            {
              question: "What is linoleic acid?",
              options: [
                "A type of protein",
                "A fatty acid that helps with blood vessel dilation in intercellular cement",
                "A mineral",
                "An enzyme"
              ],
              correctAnswer: 1
            },
            {
              question: "What is the term for fungus?",
              options: ["Bacteria", "Virus", "Yeast", "Tinea"],
              correctAnswer: 3
            },
            {
              question: "If you are doing a service and notice a disease, what do you do?",
              options: [
                "Continue with the service",
                "Use antiseptic",
                "Refer to a physician",
                "Apply a moisturizer"
              ],
              correctAnswer: 2
            },
            {
              question: "What is Acupuncture?",
              options: [
                "A type of massage",
                "A Chinese medical practice involving needles",
                "A laser therapy technique",
                "A chemical peel method"
              ],
              correctAnswer: 1
            },
            {
              question: "What is Addison's disease?",
              options: [
                "A condition where the adrenal gland produces too much hydrocortisone",
                "A condition where the adrenal gland produces too little hydrocortisone",
                "A skin infection",
                "A type of cancer"
              ],
              correctAnswer: 1
            },
            {
              question: "Define Tinea Versicolor.",
              options: [
                "A bacterial infection",
                "A fungal infection causing white patches",
                "A type of dermatitis",
                "A form of acne"
              ],
              correctAnswer: 1
            },
            {
              question: "What is Rhinophyma?",
              options: [
                "Enlarged pores",
                "A subtype of Rosacea that affects the nose",
                "A bacterial infection",
                "A fungal infection"
              ],
              correctAnswer: 1
            },
            {
              question: "In galvanic, where is the positive electrode placed?",
              options: [
                "On the face",
                "Under the shoulder",
                "On the abdomen",
                "On the hand"
              ],
              correctAnswer: 1
            },
            {
              question: "What needs to be listed in ingredient list?",
              options: ["Fragrance", "Colorants", "Humectants", "Allergens"],
              correctAnswer: 2
            },
            {
              question: "What is non-pathogenic bacteria dependent on?",
              options: [
                "Oxygen",
                "Absorbency of vitamins",
                "Sugar",
                "Proteins"
              ],
              correctAnswer: 1
            },
            {
              question: "What contraindicates the use of a suction machine?",
              options: ["Oily skin", "Acne", "Couperose skin", "Rosacea"],
              correctAnswer: 2
            },
            {
              question: "What is the SPACE between collagen and elastin in the dermis?",
              options: ["Keratin", "Reticulin", "Fibroblasts", "Elastase"],
              correctAnswer: 1
            },
            {
              question: "What is the SUBSTANCE between collagen and elastin?",
              options: [
                "Sebum",
                "Elastin",
                "Ground substance",
                "Proteins"
              ],
              correctAnswer: 2
            },
            {
              question: "What causes the skin to be yellow, gray, and sallow?",
              options: ["Vitamin deficiency", "Smoking", "Excessive sun exposure", "Stress"],
              correctAnswer: 1
            },
            {
              question: "What is cellulite?",
              options: [
                "A type of skin infection",
                "Fat cells beneath the skin that cause dimpling",
                "An overgrowth of skin cells",
                "A condition affecting skin elasticity"
              ],
              correctAnswer: 1
            },
            {
              question: "What is another name for pore?",
              options: ["Follicle", "Ostium", "Sebaceous gland", "Comedone"],
              correctAnswer: 1
            },
            {
              question: "What's the difference between type A and type B Botox?",
              options: [
                "Type A is for the face, Type B is for the body",
                "Type A is the Botox brand, Type B is used for underarms",
                "Type A is stronger than Type B",
                "Type B lasts longer than Type A"
              ],
              correctAnswer: 1
            },
            {
              question: "Difference between involuntary and voluntary (other names for them):",
              options: [
                "Voluntary muscles contract automatically, involuntary muscles do not",
                "Voluntary muscles include the heart, involuntary muscles include the biceps",
                "Involuntary muscles function without conscious control, voluntary muscles do not",
                "There is no difference between the two"
              ],
              correctAnswer: 2
            },
            {
              question: "Define psoriasis.",
              options: [
                "A fungal infection",
                "A bacterial infection",
                "A skin disease causing silvery, flaky, dry skin",
                "An allergic reaction"
              ],
              correctAnswer: 2
            },
            {
              question: "What holds the epidermis and dermis together?",
              options: [
                "Collagen fibers",
                "Sebum",
                "Dermal Papillae",
                "Elastin"
              ],
              correctAnswer: 2
            },
            {
              question: "What machine causes an electrochemical effect?",
              options: ["Laser", "Galvanic", "Microcurrent", "LED light therapy"],
              correctAnswer: 1
            },
            {
              question: "What is the acronym SOAP used for? And what does it stand for?",
              options: [
                "Standard Operating Procedures - Safety, Operation, Analysis, Practice",
                "Documentation in Medical Charting - Subjective, Objective, Assessment, Plan",
                "Skincare - Objective, Application, Protocols",
                "Sterilization - Objects, Air, Procedures"
              ],
              correctAnswer: 1
            },
            {
              question: "What is not a bacteria?",
              options: ["Fungi", "Staphylococcus", "Streptococcus", "E. coli"],
              correctAnswer: 0
            },
            {
              question: "What do sudoriferous glands produce?",
              options: ["Sebum", "Sweat", "Hormones", "Collagen"],
              correctAnswer: 1
            },
            {
              question: "What does the herpes simplex virus look like?",
              options: [
                "Red blister-like lesions",
                "Dry patches",
                "White pustules",
                "Flaky skin"
              ],
              correctAnswer: 0
            },
            {
              question: "Ascorbic acid is also known as?",
              options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
              correctAnswer: 2
            },
            {
              question: "What light does the woods lamp use?",
              options: ["Infrared", "Visible", "Filtered black light", "Ultraviolet"],
              correctAnswer: 2
            },
            {
              question: "Medical term for eyelashes:",
              options: ["Cilia", "Follicles", "Lashes", "Tarsus"],
              correctAnswer: 0
            },
            {
              question: "What muscle connects the occipitalis to the frontalis?",
              options: ["Platysma", "Temporalis", "Orbicularis oculi", "Aponeurosis"],
              correctAnswer: 3
            },
            {
              question: "What normalizes body temperature?",
              options: ["Sweat glands", "Sebaceous glands", "Eccrine glands", "Hypothalamus"],
              correctAnswer: 3
            },
            {
              question: "What is the largest bone in the face?",
              options: ["Mandible", "Maxilla", "Zygomatic", "Nasal"],
              correctAnswer: 0
            },
            {
              question: "How is paraffin applied to the face?",
              options: [
                "Brushed on directly",
                "Dipped gauze in paraffin and applied",
                "Sprayed on",
                "Poured directly on the face"
              ],
              correctAnswer: 1
            },
            {
              question: "How many cranial bones are there?",
              options: ["6", "8", "10", "12"],
              correctAnswer: 1
            },
            {
              question: "Where is the ideal brow supposed to end?",
              options: [
                "Outer corner of the eye directly out from the iris",
                "At the temple",
                "Above the cheekbone",
                "At the ear"
              ],
              correctAnswer: 0
            },
            {
              question: "What is a carbomer?",
              options: [
                "A thickening agent",
                "A surfactant",
                "A pH adjuster",
                "An exfoliant"
              ],
              correctAnswer: 0
            },
            {
              question: "What do motor nerves do?",
              options: [
                "Carry signals to the brain",
                "Control sensations",
                "Tell muscles to contract",
                "Regulate blood flow"
              ],
              correctAnswer: 2
            },
            {
              question: "What is an AMP?",
              options: [
                "The base unit of electrical resistance",
                "The base unit of electrical current",
                "The base unit of electrical power",
                "The base unit of voltage"
              ],
              correctAnswer: 1
            },
            {
              question: "What is Sodium Lauryl Sulfate?",
              options: [
                "A moisturizer",
                "A surfactant in cleansers",
                "A chemical exfoliant",
                "An anti-aging ingredient"
              ],
              correctAnswer: 1
            },
            {
              question: "What is Hydriatics?",
              options: [
                "A study of hydration in skin care",
                "A type of water-based moisturizer",
                "Manual of the water cure",
                "A technique for applying water-based treatments"
              ],
              correctAnswer: 2
            },
            {
              question: "What muscle is Botox injected into?",
              options: ["Temporalis", "Frontalis", "Corrugator", "Orbicularis oculi"],
              correctAnswer: 2
            },
            {
              question: "When prepping for a chemical peel, what do you do?",
              options: [
                "Moisturize the skin",
                "Apply sunscreen",
                "Strip oils from the skin",
                "Exfoliate lightly"
              ],
              correctAnswer: 2
            },
            {
              question: "What is desquamation?",
              options: [
                "The shedding of the outer layers of the skin",
                "The formation of new skin cells",
                "A form of chemical peel",
                "A condition causing red patches"
              ],
              correctAnswer: 0
            },
            {
              question: "What is the ingredient in Botox?",
              options: [
                "Hyaluronic acid",
                "Retinoic acid",
                "Clostridium Botulinum",
                "Collagen"
              ],
              correctAnswer: 2
            },
            {
              question: "What is another name for a blackhead?",
              options: ["Comedone", "Papule", "Pustule", "Macule"],
              correctAnswer: 0
            },
            {
              question: "What color does the skin turn if the peel is too deep?",
              options: [
                "Pink",
                "Yellow",
                "White",
                "Blue"
              ],
              correctAnswer: 2
            },
            {
              question: "Which ethnicity ages slowest?",
              options: ["Caucasian", "Asian", "African American", "Hispanic"],
              correctAnswer: 2
            },
            {
              question: "The degree of acid & alkalinity of a product is measured by the amount of:",
              options: [
                "Calcium ions",
                "Magnesium ions",
                "Hydrogen ions",
                "Sodium ions"
              ],
              correctAnswer: 2
            },
            {
              question: "What is the state of equilibrium?",
              options: [
                "When the number of electrons exceeds the number of protons",
                "When the number of protons equals the number of neutrons",
                "When the number of protons equals the number of orbiting electrons",
                "When an atom is unstable"
              ],
              correctAnswer: 2
            },
            {
              question: "What is Galvanic?",
              options: [
                "Direct current causing a chemical reaction",
                "Alternating current causing muscle contraction",
                "A type of facial massage",
                "A method of laser treatment"
              ],
              correctAnswer: 0
            },
            {
              question: "What is a contraindication for body wraps?",
              options: [
                "Oily skin",
                "Diabetes",
                "Dry skin",
                "Cellulite"
              ],
              correctAnswer: 1
            },
            {
              question: "What is shadowing and contouring?",
              options: [
                "Highlighting is shading a feature; contouring is enhancing it",
                "Shadowing is diminishing a feature with darker colors; contouring is highlighting with lighter colors",
                "Contouring is hiding imperfections; shadowing is highlighting",
                "They are the same"
              ],
              correctAnswer: 1
            },
            {
              question: "Which hormone causes hair loss and weight loss?",
              options: ["Cortisol", "Estrogen", "Testosterone", "Insulin"],
              correctAnswer: 1
            },
            {
              question: "Describe the diamond face shape:",
              options: [
                "Wide forehead and narrow chin",
                "Pointed/narrow forehead and chin with the widest part at the cheeks",
                "Rounded jawline and cheeks",
                "Square jawline and forehead"
              ],
              correctAnswer: 1
            },
            {
              question: "A means of sterilization would require the use of an:",
              options: ["Autoclave", "Disinfectant", "Alcohol", "Soap"],
              correctAnswer: 0
            },
            {
              question: "Applying microdermabrasion too aggressively will result in what?",
              options: [
                "Dryness",
                "Skin irritation",
                "Pinpoint bleeding",
                "Hyperpigmentation"
              ],
              correctAnswer: 2
            },
            {
              question: "How many pints of blood are in the average adult?",
              options: ["8", "10", "12", "14"],
              correctAnswer: 1
            },
            {
              question: "How many metacarpals are in the palm?",
              options: ["4", "5", "6", "7"],
              correctAnswer: 1
            },
            {
              question: "What is rosacea?",
              options: [
                "A bacterial skin infection",
                "A vascular condition characterized by red flushing skin",
                "A fungal infection",
                "A type of acne"
              ],
              correctAnswer: 1
            },
            {
              question: "What injury is caused by protein coagulation?",
              options: [
                "Muscle strain",
                "Heat rash",
                "Hemophilia",
                "Blisters"
              ],
              correctAnswer: 2
            },
            {
              question: "Define Fulgeration.",
              options: [
                "A laser treatment",
                "Procedure to destroy tissue by use of high frequency",
                "A type of chemical peel",
                "A method of massage"
              ],
              correctAnswer: 1
            },
            {
              question: "What is an example of a non-pathogenic fungus?",
              options: ["Molds", "Yeast", "Bacteria", "Viruses"],
              correctAnswer: 0
            },
            {
              question: "Define Pituitary gland.",
              options: [
                "A hormone-producing gland located in the abdomen",
                "A gland in the neck that regulates metabolism",
                "The master gland of the endocrine system that controls other glands",
                "A skin gland responsible for sweat production"
              ],
              correctAnswer: 2
            },
            {
              question: "What is a cleanser applied with?",
              options: ["Brush", "Hands", "Cotton pad", "Sponge"],
              correctAnswer: 1
            },
            {
              question: "Why would you do endermologie after liposuction?",
              options: [
                "To reduce swelling",
                "To improve skin texture",
                "For better results and body shaping",
                "To promote relaxation"
              ],
              correctAnswer: 2
            },
            {
              question: "What is hyperthyroidism?",
              options: [
                "Too much production of the thyroid gland",
                "Too little production of the thyroid gland",
                "Overproduction of adrenal hormones",
                "Underproduction of insulin"
              ],
              correctAnswer: 0
            },
            {
              question: "What can increase the depth of a peel?",
              options: [
                "A cool compress",
                "An occlusive",
                "Extra exfoliation",
                "Sun exposure"
              ],
              correctAnswer: 1
            },
            {
              question: "Define Scleroderma:",
              options: [
                "A type of skin cancer",
                "An autoimmune disease causing thickening of the skin",
                "A fungal infection",
                "A form of dermatitis"
              ],
              correctAnswer: 1
            },
            {
              question: "Cleanser is removed starting from where?",
              options: ["Forehead", "Cheeks", "Neck", "Chin"],
              correctAnswer: 2
            },
            {
              question: "What is Thalassotherapy?",
              options: [
                "Therapy using essential oils",
                "Therapy using seaweed wraps",
                "The use of sea water and marine products for treatment",
                "A type of massage"
              ],
              correctAnswer: 2
            },
            {
              question: "What do chemical peels benefit?",
              options: [
                "Dry skin",
                "Oily skin",
                "Aging, sun-damaged skin",
                "Normal skin"
              ],
              correctAnswer: 2
            },
            {
              question: "What is in the Jessner Solution?",
              options: [
                "Glycolic acid, salicylic acid, resorcinol",
                "Salicylic acid, lactic acid, resorcinol",
                "Glycolic acid, lactic acid, retinoic acid",
                "Lactic acid, mandelic acid, resorcinol"
              ],
              correctAnswer: 1
            },
            {
              question: "What does steaming the face do?",
              options: [
                "Hydrates the skin",
                "Tightens the skin",
                "Softens dead skin cells",
                "Exfoliates the skin"
              ],
              correctAnswer: 2
            },
                {
                  question: "Sodium lauryl sulfate is a common ingredient found in:",
                  options: ["Moisturizers", "Cleansers", "Exfoliants", "Toners"],
                  correctAnswer: 1
                },
                {
                  question: "What is the horseshoe pigmentation called?",
                  options: ["Poikiloderma of Civatte", "Melasma", "Vitiligo", "Hyperpigmentation"],
                  correctAnswer: 0
                },
                {
                  question: "When massaging the hands and arms, what muscles would you affect?",
                  options: ["Pronator, Supinator, Flexors, and Extensors", "Biceps and Triceps", "Deltoids", "Quadriceps"],
                  correctAnswer: 0
                },
                {
                  question: "What contraindicates electrical treatments?",
                  options: ["Dry skin", "Oily skin", "Epilepsy", "Acne"],
                  correctAnswer: 2
                },
                {
                  question: "Which stage of hair growth does laser work best on?",
                  options: ["Catagen", "Telogen", "Anagen", "All stages"],
                  correctAnswer: 2
                },
                {
                  question: "What is the purpose of the skin analysis?",
                  options: ["To sell products", "To determine skin type and condition", "To provide a massage", "To remove makeup"],
                  correctAnswer: 1
                },
                {
                  question: "What could you use for facial steaming?",
                  options: ["Cold compress", "Hot towels", "Ice packs", "Cleansing wipes"],
                  correctAnswer: 1
                },
                {
                  question: "What is a humectant?",
                  options: ["A substance that attracts moisture to the skin", "A drying agent", "A type of exfoliant", "A pH balancer"],
                  correctAnswer: 0
                },
                {
                  question: "Where does your lymphatic system empty into?",
                  options: ["Digestive system", "Respiratory system", "Circulatory system", "Nervous system"],
                  correctAnswer: 2
                },
                {
                  question: "Reflexology is a treatment commonly used where?",
                  options: ["Face", "Hands and feet", "Back", "Shoulders"],
                  correctAnswer: 1
                },
                {
                  question: "What is another name for Accutane?",
                  options: ["Isotretinoin", "Tretinoin", "Retinol", "Vitamin C"],
                  correctAnswer: 0
                },
                {
                  question: "Microcurrent does what?",
                  options: [
                    "Aids in healing and repairing tissue",
                    "Exfoliates the skin",
                    "Moisturizes the skin",
                    "Removes hair permanently"
                  ],
                  correctAnswer: 0
                },
                {
                  question: "What does the Thymus gland do?",
                  options: [
                    "Controls metabolism",
                    "Produces insulin",
                    "Signals the development of the immune system in young people",
                    "Regulates calcium levels"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "Diathermy is?",
                  options: [
                    "A heat-based treatment for muscle pain",
                    "A special type of current used in the treatment of telangiectasia",
                    "A type of laser therapy",
                    "A chemical exfoliant"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "Before and after liposuction, what treatments can be performed?",
                  options: [
                    "Microdermabrasion and LED therapy",
                    "Endermologie and Synergy (cellulite treatments)",
                    "Chemical peels and waxing",
                    "Ultrasound and radiofrequency"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What is necrosis tissue?",
                  options: [
                    "Tissue that has excessive blood flow",
                    "Healthy skin tissue",
                    "Dead cells due to lack of blood supply",
                    "Overgrown skin tissue"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "Another name for skin tags?",
                  options: ["Milia", "Acrochordon", "Papules", "Comedones"],
                  correctAnswer: 1
                },
                {
                  question: "Coenocytes do what?",
                  options: [
                    "Act as cellular glue in the epidermis",
                    "Produce oil",
                    "Generate new skin cells",
                    "Aid in the immune response"
                  ],
                  correctAnswer: 0
                },
                {
                  question: "What is a contraindication for performing chemical peels?",
                  options: ["Dry skin", "Erythema", "Oily skin", "Combination skin"],
                  correctAnswer: 1
                },
                {
                  question: "Another name for Vichy shower?",
                  options: ["Steam bath", "Affusion therapy", "Sauna", "Hydrotherapy"],
                  correctAnswer: 1
                },
                {
                  question: "What are the ingredients that concentrate emollients?",
                  options: ["Preservatives", "Antioxidants", "Humectants", "Fragrance"],
                  correctAnswer: 2
                },
                {
                  question: "What's the correct term for increased pigment?",
                  options: ["Albinism", "Melasma", "Chloasma", "Vitiligo"],
                  correctAnswer: 2
                },
                {
                  question: "What are the connectors of the Upper Epidermal Tissue?",
                  options: ["Desmosomes", "Collagen fibers", "Elastin", "Melanocytes"],
                  correctAnswer: 0
                },
                {
                  question: "Contraindication of Lymphatic Drainage?",
                  options: ["Eczema", "Autoimmune disease", "Dry skin", "Sunburn"],
                  correctAnswer: 1
                },
                {
                  question: "What does exfoliation & vacuum stimulate?",
                  options: [
                    "Circulation",
                    "Reproduction of new living cells by the fibroblast",
                    "Sebum production",
                    "Inflammation"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "For asthma patients, you should:",
                  options: [
                    "Use strong fragrances",
                    "Apply chemical peels",
                    "Use minimal steam during a facial",
                    "Massage vigorously"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "What are bloodborne pathogens?",
                  options: [
                    "Infectious substances in the blood causing infection & disease",
                    "A type of blood cell",
                    "Antibodies",
                    "Proteins in the blood"
                  ],
                  correctAnswer: 0
                },
                {
                  question: "What are Platelets?",
                  options: [
                    "Cells that produce hormones",
                    "Blood cells that aid in the forming of clots",
                    "Cells that fight infection",
                    "Cells that carry oxygen"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What is the technical term for excessive hair growth?",
                  options: ["Hypertrichosis", "Alopecia", "Hirsutism", "Trichology"],
                  correctAnswer: 2
                },
                {
                  question: "What causes protein coagulation?",
                  options: ["Vitamin D", "Vitamin K", "Vitamin C", "Calcium"],
                  correctAnswer: 1
                },
                {
                  question: "Medical term for dry skin:",
                  options: ["Eczema", "Asteatosis", "Xerosis", "Dermatitis"],
                  correctAnswer: 1
                },
                {
                  question: "Contraindication of using microcurrent?",
                  options: [
                    "Low blood pressure",
                    "High blood pressure, metal implants, pregnant, pacemaker",
                    "Oily skin",
                    "Dry skin"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What makes up the nucleus of an atom?",
                  options: ["Protons and Electrons", "Protons and Neutrons", "Electrons and Neutrons", "Protons only"],
                  correctAnswer: 1
                },
                {
                  question: "What happens when an atom is stable?",
                  options: [
                    "It gains electrons",
                    "It loses electrons",
                    "It reaches equilibrium",
                    "It becomes charged"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "Elastosis is what?",
                  options: [
                    "The growth of elastic tissue",
                    "The breakdown of elastic tissue",
                    "Excessive skin elasticity",
                    "Inflammation of the skin"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What is the name of the muscle that covers the top of the head?",
                  options: ["Temporalis", "Platysma", "Epicranius", "Frontalis"],
                  correctAnswer: 2
                },
                {
                  question: "What is considered a contraindication?",
                  options: [
                    "Sterilization procedures",
                    "Salicylic on someone using Isotretinoin",
                    "Use of sunscreen",
                    "Wearing makeup"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "Contraindication of facial waxing:",
                  options: ["Dry skin", "Topical antibiotics, Retin-A", "Large pores", "Oily skin"],
                  correctAnswer: 1
                },
                {
                  question: "What is Telangiectasia?",
                  options: ["Enlarged hair follicles", "Red inflamed skin", "Distended capillaries", "Blocked pores"],
                  correctAnswer: 2
                },
                {
                  question: "Most common result of sun damage:",
                  options: ["Vitiligo", "Melasma", "Hyperpigmentation", "Actinic Lentigines"],
                  correctAnswer: 3
                },
                {
                  question: "What could be dependent on non-pathogenic bacteria?",
                  options: [
                    "Oxygen production",
                    "Vitamin absorption",
                    "Acne formation",
                    "Fungal infections"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What is the lowest layer of the epidermis?",
                  options: ["Stratum Corneum", "Stratum Spinosum", "Basal Layer", "Stratum Granulosum"],
                  correctAnswer: 2
                },
                {
                  question: "Agents that cause disease, namely bacteria & viruses:",
                  options: ["Antibodies", "Pathogens", "Neutrophils", "Lymphocytes"],
                  correctAnswer: 1
                },
                {
                  question: "Define Dyschromia:",
                  options: ["The loss of skin elasticity", "The discoloration of skin", "Skin inflammation", "Cellulite formation"],
                  correctAnswer: 1
                },
                {
                  question: "What is it called when the loss of an electron occurs?",
                  options: ["Ionization", "Reduction", "Polarization", "Oxidation"],
                  correctAnswer: 3
                },
                {
                  question: "Seaweed body wraps do what?",
                  options: [
                    "Hydrate the skin",
                    "Relax muscles",
                    "Release harmful toxins",
                    "Exfoliate the skin"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "What are Hematomas?",
                  options: ["Bruises", "Cuts", "Blisters", "Scratches"],
                  correctAnswer: 0
                },
                {
                  question: "What is Perioral Dermatitis?",
                  options: [
                    "Acne-like condition around the mouth",
                    "A type of fungal infection",
                    "A form of rosacea",
                    "A bacterial infection"
                  ],
                  correctAnswer: 0
                },
                {
                  question: "What is Plasma?",
                  options: [
                    "A type of blood cell",
                    "A pale yellow or grey protein-rich fluid in blood",
                    "A gas used in skin treatments",
                    "A skincare product"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "Bromhidrosis is what?",
                  options: [
                    "Foul-smelling perspiration",
                    "Increased oil production",
                    "Skin dryness",
                    "Excessive hair growth"
                  ],
                  correctAnswer: 0
                },
                {
                  question: "Contraindication for microdermabrasion:",
                  options: ["Oily skin", "Rosacea", "Combination skin", "Mature skin"],
                  correctAnswer: 1
                },
                {
                  question: "What is Edema?",
                  options: [
                    "Excess oil production",
                    "Fluid and swelling under the skin",
                    "A type of rash",
                    "Increased blood flow"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What massage is used in MLD?",
                  options: [
                    "Deep-tissue massage",
                    "Swedish massage",
                    "Light-massage",
                    "Hot stone massage"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "What causes women to have acne & hirsutism?",
                  options: [
                    "High estrogen levels",
                    "Lack of exercise",
                    "Androgen hormone",
                    "Low thyroid function"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "What is pinpoint bleeding?",
                  options: [
                    "Bleeding on the surface of the skin",
                    "Small entry to the papillary dermis",
                    "A sign of infection",
                    "A type of rash"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "Define Hydroquinone:",
                  options: [
                    "A chemical exfoliant",
                    "A bleaching agent that inhibits melanin production",
                    "A moisturizer",
                    "A sunscreen ingredient"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What is Kojic Acid?",
                  options: [
                    "A chemical exfoliant",
                    "A moisturizing agent",
                    "A bleaching agent derived from Japanese mushrooms",
                    "A form of Vitamin C"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "What do adrenal glands secrete?",
                  options: ["Insulin", "Adrenaline", "Estrogen", "Collagen"],
                  correctAnswer: 1
                },
                {
                  question: "Melanocytes, Merkel Cells & Langerhans Cells are found in:",
                  options: ["Stratum Corneum", "Stratum Spinosum", "Stratum Granulosum", "Germinativum Layer"],
                  correctAnswer: 3
                },
                {
                  question: "Higher levels of Fitzpatrick skin types are less sensitive to:",
                  options: ["Chemical peels", "Laser treatments", "Environmental harm", "UV light"],
                  correctAnswer: 2
                },
                {
                  question: "What scale is used to identify sun tolerance to the skin?",
                  options: ["Pain scale", "Bristol scale", "Fitzpatrick scale", "Color chart"],
                  correctAnswer: 2
                },
                {
                  question: "How many days do you have to dispute?",
                  options: ["10", "15", "20", "30"],
                  correctAnswer: 2
                },
                {
                  question: "What regulates the strength of electrical current?",
                  options: ["Resistor", "Capacitor", "Circuit breaker", "Transformer"],
                  correctAnswer: 2
                },
                {
                  question: "What does superficial peeling do for the skin?",
                  options: ["Removes deep layers", "Removes dead surface cells", "Stimulates collagen", "Increases blood flow"],
                  correctAnswer: 1
                },
                {
                  question: "What is NOT one of the building blocks of a successful business?",
                  options: ["Employees", "Location", "Product quality", "Marketing"],
                  correctAnswer: 0
                },
                {
                  question: "What kind of allergic reaction occurs on the skin?",
                  options: ["Dermatitis", "Asthma", "Hay fever", "Sneezing"],
                  correctAnswer: 0
                },
                {
                  question: "What ingredient is an excellent skin softener & humectant formed by the decomposition of fat?",
                  options: ["Glycerin", "Lanolin", "Hyaluronic Acid", "Aloe Vera"],
                  correctAnswer: 0
                },
                {
                  question: "Prior to receiving a chemical peel, a client predisposed to herpes should be treated with what?",
                  options: ["Antibiotics", "Antiviral medication", "Moisturizer", "Steroid cream"],
                  correctAnswer: 1
                },
                {
                  question: "What is the Integumentary System?",
                  options: ["The lymphatic system", "The muscular system", "The skin", "The nervous system"],
                  correctAnswer: 2
                },
                {
                  question: "What is the thin, clear sublayer of the epidermis?",
                  options: ["Stratum Corneum", "Stratum Lucidum", "Stratum Spinosum", "Stratum Granulosum"],
                  correctAnswer: 1
                },
                {
                  question: "What type of scars do we not treat with microdermabrasion?",
                  options: ["Keloids", "Ice pick scars", "Hypertrophic scars", "Surgical scars"],
                  correctAnswer: 1
                },
                {
                  question: "What is the superficial sublayer of the epidermis that varies in thickness over the body?",
                  options: ["Stratum Corneum", "Stratum Granulosum", "Stratum Spinosum", "Stratum Basale"],
                  correctAnswer: 0
                },
                {
                  question: "Macrophages & Lymphocytes are part of what system?",
                  options: ["Nervous system", "Muscular system", "Immune system", "Circulatory system"],
                  correctAnswer: 2
                },
                {
                  question: "What is the disease that causes the skin to thin & bruise easily?",
                  options: ["Eczema", "Psoriasis", "Cushing's Syndrome", "Addison's Disease"],
                  correctAnswer: 2
                },
                {
                  question: "An example of proteolytic (protein dissolving) treatment:",
                  options: ["Exfoliating scrub", "Gommage", "Moisturizer", "Toner"],
                  correctAnswer: 1
                },
                {
                  question: "What is the Catagen stage of hair growth?",
                  options: [
                    "An active growth phase",
                    "A transition phase where the hair stops growing",
                    "A resting phase",
                    "A shedding phase"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What are lesions that are non-cancerous?",
                  options: ["Malignant", "Benign", "Invasive", "Carcinogenic"],
                  correctAnswer: 1
                },
                {
                  question: "What is the medical term for a facelift?",
                  options: ["Blepharoplasty", "Rhinoplasty", "Rhytidectomy", "Liposuction"],
                  correctAnswer: 2
                },
                {
                  question: "What causes hirsutism & skin discoloration in women?",
                  options: [
                    "Thyroid imbalances",
                    "Hormone imbalances (Androgen hormone)",
                    "Vitamin deficiencies",
                    "Bacterial infections"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What is the process called that is used to soften grease deposits & blackheads in the hair follicle?",
                  options: ["Extraction", "Steaming", "Disincrustation", "Exfoliation"],
                  correctAnswer: 2
                },
                {
                  question: "What chemical peel should not be used if someone's allergic to aspirin?",
                  options: ["Glycolic", "Salicylic", "Lactic", "TCA"],
                  correctAnswer: 1
                },
                {
                  question: "What type of skin should laser not be performed on?",
                  options: ["Type I", "Type III", "Type IV", "Type VI"],
                  correctAnswer: 3
                },
                {
                  question: "What is L-Ascorbic Acid?",
                  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                  correctAnswer: 2
                },
                {
                  question: "What determines how many passes a microderm client can have?",
                  options: ["Age", "Skin thickness", "Skin color", "Skin type"],
                  correctAnswer: 1
                },
                {
                  question: "What is the medical term for pregnancy mask?",
                  options: ["Melasma", "Vitiligo", "Hyperpigmentation", "Chloasma"],
                  correctAnswer: 3
                },
                {
                  question: "After a Laser resurfacing treatment, patient will tolerate exfoliation as early as:",
                  options: ["1 week", "2 weeks", "3 weeks", "1 month"],
                  correctAnswer: 3
                },
                {
                  question: "When an atom is in a state of equilibrium it is:",
                  options: ["Positively charged", "Negatively charged", "Neutral", "Magnetized"],
                  correctAnswer: 2
                },
                {
                  question: "What do you chart with microderm patients?",
                  options: [
                    "Skin type",
                    "Products used",
                    "The settings for the machine",
                    "Client's mood"
                  ],
                  correctAnswer: 2
                },
                {
                  question: "A microdermabrasion should stop before:",
                  options: ["Redness", "Erythema", "Peeling", "Swelling"],
                  correctAnswer: 1
                },
                {
                  question: "What makes a cream dense?",
                  options: ["Water", "Alcohol", "Humectants", "Emulsifiers"],
                  correctAnswer: 2
                },
                {
                  question: "Hepatitis B - How soon do you see symptoms?",
                  options: ["Immediately", "Within a week", "6 weeks to 6 months", "Over a year"],
                  correctAnswer: 2
                },
                {
                  question: "Medical term for a wrinkle:",
                  options: ["Comedone", "Papule", "Rhytide", "Macule"],
                  correctAnswer: 2
                },
                {
                  question: "What orbits around the nucleus?",
                  options: ["Protons", "Neutrons", "Electrons", "Atoms"],
                  correctAnswer: 2
                },
                {
                  question: "What will show imperfections you can't see with the naked eye?",
                  options: ["Magnifying glass", "Woods lamp", "UV light", "Microscope"],
                  correctAnswer: 1
                },
                {
                  question: "Telangiectasia is from what body system?",
                  options: ["Nervous system", "Immune system", "Circulatory system", "Endocrine system"],
                  correctAnswer: 2
                },
                {
                  question: "After trauma or injury to the skin what can form?",
                  options: ["Milia", "Keloids", "Acne", "Psoriasis"],
                  correctAnswer: 1
                },
                {
                  question: "What system is responsible for purifying the body by eliminating waste material?",
                  options: ["Nervous system", "Muscular system", "Excretory system", "Immune system"],
                  correctAnswer: 2
                },
                {
                  question: "What type of exfoliation is a microdermabrasion?",
                  options: ["Chemical", "Enzymatic", "Mechanical", "Manual"],
                  correctAnswer: 2
                },
                {
                  question: "What is Tinea Corporis?",
                  options: ["Athlete's foot", "Dandruff", "Ringworm", "Yeast infection"],
                  correctAnswer: 2
                },
                {
                  question: "Most effective stage for hair removal:",
                  options: ["Catagen", "Anagen", "Telogen", "Dormant"],
                  correctAnswer: 1
                },
                {
                  question: "What is the color you see following the frosting stage of a peel?",
                  options: ["Red", "White", "Blue", "Yellow"],
                  correctAnswer: 1
                },
                {
                  question: "Lactic acid is derived from:",
                  options: ["Sugar", "Milk", "Fruit", "Soy"],
                  correctAnswer: 1
                },
                {
                  question: "Cellulite treatments are meant to exfoliate and:",
                  options: ["Moisturize", "Hydrate", "Detoxify", "Tighten"],
                  correctAnswer: 2
                },
                {
                  question: "What gland regulates the body's metabolism?",
                  options: ["Adrenal", "Thyroid", "Pituitary", "Pineal"],
                  correctAnswer: 1
                },
                {
                  question: "What's an example of a bloodborne pathogen?",
                  options: ["HIV", "Fungus", "Mold", "Yeast"],
                  correctAnswer: 0
                },
                {
                  question: "A salt treatment is beneficial in stimulating and ______ the skin:",
                  options: ["Moisturizing", "Hydrating", "Exfoliating", "Detoxifying"],
                  correctAnswer: 2
                },
                {
                  question: "Which Fitzpatrick types are likely to keloid?",
                  options: ["I and II", "III and IV", "V and VI", "All types"],
                  correctAnswer: 2
                },
                {
                  question: "What does sclerotherapy treat?",
                  options: ["Acne", "Psoriasis", "Spider veins", "Rosacea"],
                  correctAnswer: 2
                },
                {
                  question: "Bromelain is derived from what?",
                  options: ["Papaya", "Pineapple", "Milk", "Sugar"],
                  correctAnswer: 1
                },
                {
                  question: "Dark eyes, black skin, and tans easily is what Fitzpatrick type?",
                  options: ["III", "IV", "V", "VI"],
                  correctAnswer: 3
                },
                {
                  question: "What drug is used to treat rosacea?",
                  options: ["Isotretinoin", "Azelaic acid", "Hydrocortisone", "Salicylic acid"],
                  correctAnswer: 1
                },
                {
                  question: "What are surfactants an ingredient in?",
                  options: ["Moisturizers", "Emulsions", "Cleansers", "Exfoliants"],
                  correctAnswer: 2
                },
                {
                  question: "What is the simplest form of a chemical?",
                  options: ["Molecule", "Element", "Compound", "Mixture"],
                  correctAnswer: 1
                },
                {
                  question: "After a laser resurfacing treatment, patients will tolerate light exfoliation as early as:",
                  options: ["1 day", "1 week", "2 weeks", "3 weeks"],
                  correctAnswer: 1
                },
                {
                  question: "What changes an alternating current to direct current?",
                  options: ["Resistor", "Rectifier", "Capacitor", "Transformer"],
                  correctAnswer: 1
                },
                {
                  question: "What is a condition of the skin characterized by blistering or epidermal separation caused by lateral pressure of the laser?",
                  options: ["Erythema", "Nikolski sign", "Blanching", "Keloid"],
                  correctAnswer: 1
                },
                {
                  question: "What is a beneficial action of a clay mask?",
                  options: ["Moisturizes the skin", "Reduces inflammation", "Absorbs impurities", "Heals cuts"],
                  correctAnswer: 2
                },
                {
                  question: "How should your license be maintained?",
                  options: ["In good standing", "Renewed every 10 years", "Kept at home", "Displayed on social media"],
                  correctAnswer: 0
                },
                {
                  question: "What are AHAs also known as?",
                  options: ["Alpha hydroxy acids", "Beta hydroxy acids", "Retinoids", "Enzymes"],
                  correctAnswer: 0
                },
                {
                  question: "What is it called when an atom loses an electron?",
                  options: ["Reduction", "Oxidation", "Ionization", "Electrolysis"],
                  correctAnswer: 1
                },
                {
                  question: "What is a deep injection of the dermis caused by streptococcus?",
                  options: ["Cellulitis", "Eczema", "Dermatitis", "Psoriasis"],
                  correctAnswer: 0
                }
              ];
              export { fullQuizQuestions };