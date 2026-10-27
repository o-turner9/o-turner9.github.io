/*
  Everything in the sketchbook lives here. Edit this file to change what
  shows up in the flipbook; no other code needs to change.

  Each chapter has:
    id     - used in links (#work/paintings)
    title  - shown, centred, on the chapter's opening page
    tab    - short label for the divider tab on the side of the book
    color  - the wash color on the chapter page (one of: rose, peach, butter, mint, sky, lilac)
    pages  - each page holds 1-3 pieces. A page is either a list of pieces, or
             { stack: true, items: [...] }  to stack its pieces top to bottom, or
             { left: true, items: [...] }   to make sure it lands on a left-hand page
                                             (so it faces the page after it)

  Each piece has:
    src      - file name in assets/works/ (without .webp), or a video name in assets/video/
    type     - "video" for clips (optional; images are the default)
    w, h     - original pixel size, used to keep the layout steady while images load
    title, year, medium, caption - shown in the caption and in the enlarged view
    alt      - a description for people using screen readers
    video    - (optional) a clip in assets/video/ (without .mp4) that plays in the enlarged view
    pdf      - (optional) a PDF to open from the enlarged view, e.g. "assets/nabi-edition-1.pdf"
    pdfLabel - (optional) the link text for that PDF
*/

window.SKETCHBOOK = [
  {
    id: "immersive",
    title: "Immersive media",
    tab: "immersive",
    color: "sky",
    pages: [
      [{ src: "relic", w: 1920, h: 1048, title: "Reliquary World", year: "2024", medium: "Unreal Engine",
         caption: "Reliquary World is a narrative-driven Unreal Engine environment that recontextualizes an everyday object as a digital “reliquary.” The project explores how meaning can be constructed through transformation, using photogrammetry to capture a real-world object and reframe it within an immersive, symbolic space.",
         alt: "The reliquary object displayed in an Unreal Engine scene." }],
      { stack: true, items: [
        { src: "castle", w: 1920, h: 1048, title: "Reliquary World, detail", year: "2024", medium: "Unreal Engine",
          caption: "", alt: "A castle-like structure in the Reliquary World environment." },
        { src: "reliquary-landscape", w: 1920, h: 1048, title: "Reliquary World, alternate view", year: "2024", medium: "Unreal Engine",
          caption: "", alt: "Wide landscape view of the Reliquary World environment." }
      ] },
      [{ src: "topview", w: 1920, h: 1048, title: "Reliquary World, alternate view 2", year: "2024", medium: "Unreal Engine",
         caption: "", alt: "Top-down view of the Reliquary World environment." }],
      [{ src: "screenshot-2025-03-11-164552", w: 1603, h: 1279, title: "Reliquary", year: "2024", medium: "Autodesk Maya",
         caption: "The process began by scanning and reconstructing a physical object through photogrammetry, which was then optimized and integrated into a real-time 3D environment. Within Unreal Engine, the object is placed in a deliberately composed scene where lighting, materials, and spatial design work together to elevate its presence and narrative significance.",
         alt: "Maya viewport of a gold box-headed reliquary with a tiny crown, standing on a white chalice-shaped pedestal." }],
      [{ src: "screenshot-2025-03-11-173334", w: 1033, h: 999, title: "Reliquary, wireframe", year: "2024", medium: "Autodesk Maya",
         caption: "Later iteration of the 3D model, displayed as wireframe.",
         alt: "The reliquary model shown with its wireframe, with crossed swords behind the pedestal." }],
      [{ src: "unreal-reliquary", type: "video", w: 1280, h: 720, title: "Artchive", year: "2025", medium: "Unreal Engine",
         caption: "Artchive is a virtual reality platform that helps emerging artists preserve and showcase their work beyond the limits of physical space. Inspired by students storing artwork in cramped rooms, it reimagines the portfolio as an immersive, customizable gallery where visitors move through personalized spaces, see work at different scales, and engage with pieces through motion and animation. This prototype focuses on the core interactions, with room to grow into larger, richer exhibitions, combining digital archiving and spatial storytelling in a new way to experience, share and preserve creative work.", alt: "Short silent clip moving through the Artchive virtual gallery in Unreal Engine." }],
      [{ src: "artchive-tour", type: "video", w: 1280, h: 720, title: "Artchive, tour", year: "2025", medium: "Unreal Engine",
         caption: "", alt: "Short silent clip touring the Artchive virtual gallery." }],
      [{ src: "artchive-building-capture", w: 1920, h: 1048, title: "Artchive, exterior", year: "2025", medium: "Unreal Engine",
         caption: "", alt: "Exterior of the Artchive virtual gallery building." }],
      [{ src: "turner-a3jellies-ss", w: 2338, h: 1312, title: "Jellies", year: "2024", medium: "TouchDesigner",
         caption: "Inspired by the graceful movement of jellyfish and schools of fish in a crowded ocean, this TouchDesigner project simulates an underwater ecosystem. Utilizing various noise algorithms to generate dynamic movement, the 3D objects in the scene mimic the fluid, organic motion of marine life. The result is an immersive visual experience that captures the mesmerizing rhythm of ocean creatures swimming in harmony.",
         alt: "Digital scene of glossy blue and pink spheres, a curving lilac tube and a pink wire mesh among drifting droplets on a turquoise ground." }],
      [{ src: "turner-a4sodapop-ss", video: "soda-pop", w: 2494, h: 1396, title: "Soda Pop", year: "2024", medium: "TouchDesigner",
         caption: "Inspired by underwater bubbles and carbonation, this TouchDesigner project explores fluid movement and interactivity. Using Google MediaPipe for hand tracking, the project collects real-time data that influences the motion of 3D “bubbles” within the scene. Python is utilized to process the tracking data and dynamically alter the bubbles’ behavior, creating an immersive and responsive visual experience.",
         alt: "An aqua underwater scene where a figure is made of drifting square particles, with light rippling from above." }]
    ]
  },
  {
    id: "paintings",
    title: "Paintings",
    tab: "paintings",
    color: "rose",
    pages: [
      [{ src: "img-3141", w: 1437, h: 2155, title: "Organic Explosion", year: "2025", medium: "Acrylic and gouache on canvas",
         caption: "This painting focused on experimenting with gouache as a medium and exploring its capabilities on canvas.",
         alt: "Pastel painting of tangled organic forms in peach, butter yellow and white, net-like webs over a pink, mint and lilac ombre ground." }],
      [{ src: "img-6624", w: 2773, h: 2087, title: "Sweet Dreams", year: "2025", medium: "Gouache on MDF panel",
         caption: "This painting is in reference to a photo of me as a child lying on top of a rock. I thought that I could “speak to rocks,” which is why I was in that position, but I found that the pose was a good reference for my painting.",
         alt: "Painting of a girl asleep on her side with pink and violet hair in a bun, wearing a mint green top, surrounded by hazy lilac and peach clouds." }],
      [{ src: "img-6047", w: 1990, h: 2773, title: "Heavenly Child", year: "2025", medium: "Acrylic and gouache on canvas",
         caption: "", alt: "Soft painting of two children in traditional dress, a boy reaching toward a girl in pink, set in a misty rainbow haze." }],
      [{ src: "76453844727-f874367d-5df4-4179-a61b-33e017f8901f", w: 2497, h: 3883, title: "Strawberry King", year: "2025", medium: "Acrylic on canvas",
         caption: "", alt: "Abstract painting of glossy green and magenta brushstroke ribbons curling over a pale celery ground with pink and yellow glowing dots." }],
      [{ src: "img-2857", w: 3024, h: 3780, title: "Chrysanthemum", year: "2025", medium: "Acrylic on canvas",
         caption: "", alt: "Abstract painting with a magenta sphere, a lilac chrysanthemum resting on a blue ring, a gold disc webbed with red lines, and teal stripes on a pink and cream ground." }],
      [{ src: "img-8244", w: 2162, h: 2158, title: "Untitled", year: "2024", medium: "Acrylic on canvas",
         caption: "", alt: "Square abstract painting of red and green flowing ribbons, a red flower, and pale blue spheres on a coral ground, signed NABI." }]
    ]
  },
  {
    id: "illustration-design",
    title: "Illustration & design",
    tab: "design",
    color: "butter",
    pages: [
      [{ src: "bloomsjelly", w: 1118, h: 989, title: "Blooms", year: "2023", medium: "Adobe Illustrator, Procreate",
         caption: "Blooms is a digital drawing combining jellyfish and orchids. Originally used as a cover for a portfolio magazine.",
         alt: "Ink and digital illustration of a violet jellyfish whose tentacles turn into clusters of orchid blossoms." }],
      [{ src: "jazzposter", w: 703, h: 1078, title: "Jazz with a Touch of Class", year: "2022", medium: "Adobe Illustrator",
         caption: "Jazz With a Touch of Class is a poster designed for an imaginary jazz event, with a focus on capturing a vintage 1920s vibe while including all necessary event information and elements.",
         alt: "Art deco style poster of a 1920s woman in a fringed dress with a red sash, with the title Jazz with a Touch of Class and the band name Smackadoos." }],
      // the two NABI editions face each other across one spread
      { left: true, items: [
        { src: "nabi-ed1-ss", w: 1143, h: 1327, title: "NABI, edition 1", year: "2024", medium: "Newsletter cover",
          pdf: "assets/nabi-edition-1.pdf", pdfLabel: "read the newsletter (PDF)",
          caption: "Written as an assignment for a professional writing class, this debut edition introduces readers to Olivia Turner, sharing her eclectic interests from rock climbing to crocheting. Designed entirely by Olivia using InDesign and Photoshop, this edition sets the tone for a journey through art, culture, and creativity.",
          alt: "The word NABI repeated four times in blurred halftone type over a magenta to white gradient." }
      ] },
      [{ src: "nabi-ed2-ss", w: 1141, h: 1324, title: "NABI, edition 2", year: "2024", medium: "Newsletter cover",
         pdf: "assets/nabi-edition-2.pdf", pdfLabel: "read the newsletter (PDF)",
         caption: "This edition was crafted as part of a professional writing course, showcasing Olivia’s ability to blend engaging content with thoughtful design. Designed using InDesign and Photoshop.",
         alt: "Second edition cover of the NABI newsletter." }],
      [{ src: "ichiraku-ramen", w: 553, h: 757, title: "Ichiraku Ramen", year: "2022", medium: "Mixed media collage (manga pages, black ink, pastels)",
         caption: "Ichiraku Ramen is a drawing of a manga panel from Naruto. The background of the drawing features a collage of other Naruto manga panels, with a colorful imitation of a volcano in bright colors on top.",
         alt: "Mixed media collage of an anime character slurping ramen over manga page cutouts, with the words SLUURRP and NOM in hand lettering." }],
      [{ src: "formosusred", w: 676, h: 1185, title: "Formosus Red", year: "2023", medium: "3D model, Fusion 360, Adobe Illustrator",
         caption: "Formosus showcases a 3D flower model made in Blender which was used to generate horizontal cross-sections. The cross-sections were then layered to create a 3D-looking flattened image of the original model.",
         alt: "Two flowers drawn in fine cream contour lines on a deep oxblood background." }],
      [{ src: "backskull-final", w: 4589, h: 4718, title: "Outta Control", year: "2023", medium: "Digital illustration",
         caption: "Designed in the winter of 2023 for the “Outta Control Volleyball” tournament, this bold and dynamic logo captures the high-energy atmosphere of the event. Created for use on posters and participant shirts, the design features vibrant colors and dynamic typography to convey movement and excitement, balancing playfulness with a competitive edge.",
         alt: "Red brush-stroke logo artwork on a black background." }]
    ]
  },
  {
    id: "wearables",
    title: "Wearables & sculpture",
    tab: "wearables",
    color: "lilac",
    pages: [
      [{ src: "img-9004", w: 2207, h: 3569, title: "Ribs x Grunge", year: "2022", medium: "Mannequin, silicone caulk, wire, bra straps, skirt, buttons, paperclips, jump rings",
         caption: "Ribs x Grunge showcases the work of both Anatomical Confines and Grunge on a mannequin as an exhibition piece. This unique display was featured at an art show in the fall of 2022.",
         alt: "Gallery view of a dress form wearing a sculpted ribcage over a plaid skirt trimmed with buttons and chain, with wall labels beside it." }],
      { stack: true, items: [
        { src: "ribs", w: 986, h: 1067, title: "Anatomical Confines", year: "2022", medium: "Silicone caulk, wire, bra straps",
          caption: "Anatomical Confines is a wearable sculpture piece created using silicone from a cast mold of bones. The piece also features wire wrapped around the ribs for structure and is held together in the back with bra straps for easy removal.",
          alt: "A sculpted pale ribcage bound with gold wire, worn on a dress form." },
        { src: "ribs-individual", w: 2055, h: 1590, title: "Anatomical Confines, detail", year: "2022", medium: "Silicone caulk, wire, bra straps",
          caption: "", alt: "Detail view of the ribcage sculpture." }
      ] },
      { stack: true, items: [
        { src: "grunge", w: 1097, h: 1189, title: "Grunge", year: "2022", medium: "Skirt, buttons, paperclips, jump rings",
          caption: "Grunge showcases 100 hand-sewn buttons on the hem of the skirt, along with a collection of paper clips and jump rings. This piece focuses on iterations and is a testament to the intricate craftsmanship of the piece.",
          alt: "A plaid wool skirt on a dress form, its hem lined with rows of colored buttons, with safety pin chains and silver chain draped below." },
        { src: "grunge-individual", w: 3018, h: 2345, title: "Grunge, detail", year: "2022", medium: "Skirt, buttons, paperclips, jump rings",
          caption: "", alt: "Detail view of the plaid skirt with button trim." }
      ] },
      [{ src: "img-1814", w: 2922, h: 2379, title: "Reconnect & Renew", year: "2023", medium: "Bra, recycled charging cords, beads",
         caption: "Reconnect & Renew is an art piece confronting the parallels between e-waste and fast fashion. Upcycling thrifted electronic cables onto a bra base, the artist highlights the environmental impact of both industries.",
         alt: "A red bra covered in coiled white, grey and black cables with beaded paisley shapes, its straps made of headphone and charging cables." }],
      { stack: true, items: [
        { src: "overall-installation-shot-artt200-project1", w: 3669, h: 3024, title: "Iterations", year: "2022", medium: "Folded paper",
          caption: "This sculptural piece transforms 10 feet of paper into an intricate three-dimensional composition. Through precise cutting, folding, and assembly, individual pyramid-shaped forms come together to create a visually dynamic structure. The project explores the potential of paper as a sculptural medium, emphasizing geometric repetition, texture, and dimensionality.",
          alt: "A triangular relief of white folded paper pyramids arranged in a tessellating pattern." },
        { src: "alternate-installation-shot-artt200-project1", w: 4032, h: 2573, title: "Iterations, alternate view", year: "2022", medium: "Folded paper",
          caption: "", alt: "Alternate angle of the folded paper relief." }
      ] }
    ]
  }
];
