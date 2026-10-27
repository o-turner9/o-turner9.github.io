/*
  Everything in the sketchbook lives here. Edit this file to change what
  shows up in the flipbook ,no other code needs to change.

  Anything in [square brackets] is placeholder text for you to replace.

  Each chapter has:
    id     - used in links (#work/paintings)
    title  - shown on the chapter page
    tab    - short label for the divider tab on the side of the book
    color  - the wash color on the chapter page (one of: rose, peach, butter, mint, sky, lilac)
    note   - a handwritten note on the chapter's opening page
    pages  - each page holds 1-3 pieces

  Each piece has:
    src      - file name in assets/works/ (without .webp), or a video name in assets/video/
    type     - "video" for clips (optional; images are the default)
    w, h     - original pixel size, used to keep the layout steady while images load
    title, year, medium, caption - shown in the caption and in the enlarged view
    alt      - a description for people using screen readers
*/

window.SKETCHBOOK = [
  {
    id: "paintings",
    title: "Paintings",
    tab: "paintings",
    color: "rose",
    note: "[a sentence about your painting practice ,what keeps pulling you back to soft color]",
    pages: [
      [{ src: "img-3141", w: 1437, h: 2155, title: "[Untitled]", year: "[Year]", medium: "[Acrylic on canvas]",
         caption: "[What this piece is about, in a sentence or two.]",
         alt: "Pastel painting of tangled organic forms in peach, butter yellow and white, net-like webs over a pink, mint and lilac ombre ground." }],
      [{ src: "img-6624", w: 2773, h: 2087, title: "[Untitled]", year: "[Year]", medium: "[Acrylic on canvas]",
         caption: "[What this piece is about.]",
         alt: "Painting of a girl asleep on her side with pink and violet hair in a bun, wearing a mint green top, surrounded by hazy lilac and peach clouds." }],
      [{ src: "img-6047", w: 1990, h: 2773, title: "[Untitled]", year: "[Year]", medium: "[Acrylic on canvas]",
         caption: "[What this piece is about.]",
         alt: "Soft painting of two children in traditional dress, a boy reaching toward a girl in pink, set in a misty rainbow haze." }],
      [{ src: "76453844727-f874367d-5df4-4179-a61b-33e017f8901f", w: 2497, h: 3883, title: "[Untitled]", year: "[Year]", medium: "[Oil on canvas]",
         caption: "[What this piece is about.]",
         alt: "Abstract painting of glossy green and magenta brushstroke ribbons curling over a pale celery ground with pink and yellow glowing dots." }],
      [{ src: "img-2857", w: 3024, h: 3780, title: "[Untitled]", year: "[Year]", medium: "[Oil on canvas]",
         caption: "[What this piece is about.]",
         alt: "Abstract painting with a magenta sphere, a lilac chrysanthemum resting on a blue ring, a gold disc webbed with red lines, and teal stripes on a pink and cream ground." }],
      [{ src: "img-8244", w: 2162, h: 2158, title: "[Untitled]", year: "[Year]", medium: "[Acrylic on canvas]",
         caption: "[What this piece is about.]",
         alt: "Square abstract painting of red and green flowing ribbons, a red flower, and pale blue spheres on a coral ground, signed NABI." }]
    ]
  },
  {
    id: "illustration-design",
    title: "Illustration & design",
    tab: "design",
    color: "butter",
    note: "[a note about your illustration and graphic design work]",
    pages: [
      [{ src: "bloomsjelly", w: 1118, h: 989, title: "Blooms Jelly", year: "[Year]", medium: "[Digital illustration]",
         caption: "[What this piece is about.]",
         alt: "Ink and digital illustration of a violet jellyfish whose tentacles turn into clusters of orchid blossoms." }],
      [{ src: "jazzposter", w: 703, h: 1078, title: "Jazz with a Touch of Class", year: "2022", medium: "[Poster design]",
         caption: "[The brief and what you made ,e.g. an event poster for the Smackadoos.]",
         alt: "Art deco style poster of a 1920s woman in a fringed dress with a red sash, with the title Jazz with a Touch of Class and the band name Smackadoos." }],
      [{ src: "turner-design-definition-poster", w: 4800, h: 6600, title: "Design Definition", year: "[Year]", medium: "[Typographic poster]",
         caption: "[What this piece is about.]",
         alt: "Mint green poster: a bird in a yellow hoodie stands under a black speech bubble defining design as creating something purposeful and imaginative." }],
      [{ src: "ichiraku-ramen", w: 553, h: 757, title: "Ichiraku Ramen", year: "[Year]", medium: "[Mixed media collage]",
         caption: "[What this piece is about.]",
         alt: "Mixed media collage of an anime character slurping ramen over manga page cutouts, with the words SLUURRP and NOM in hand lettering." }],
      [
        { src: "nabi-ed1-ss", w: 1143, h: 1327, title: "NABI, edition 1", year: "[Year]", medium: "[Typographic study]",
          caption: "[What this series is about.]",
          alt: "The word NABI repeated four times in blurred halftone type over a magenta to white gradient." },
        { src: "nabi-ed2-ss", w: 1141, h: 1324, title: "NABI, edition 2", year: "[Year]", medium: "[Typographic study]",
          caption: "[What this series is about.]",
          alt: "Second edition of the NABI halftone type study." }
      ],
      [
        { src: "formosusred", w: 676, h: 1185, title: "Formosus Red", year: "[Year]", medium: "[Generative drawing]",
          caption: "[How you made this ,the code or process behind the line work.]",
          alt: "Two flowers drawn in fine cream contour lines on a deep oxblood background." },
        { src: "rasterflower-slicess", w: 592, h: 1195, title: "Raster Flower", year: "[Year]", medium: "[Generative drawing]",
          caption: "[How you made this.]",
          alt: "The same flower study rendered in dense black contour lines on white." }
      ],
      [{ src: "backskull-final", w: 4589, h: 4718, title: "Back Skull", year: "[Year]", medium: "[Digital illustration]",
         caption: "[What this piece is about.]",
         alt: "Sparse red brush marks forming an abstract figure on white, with a small black triangle in the corner." }]
    ]
  },
  {
    id: "wearables",
    title: "Wearables & sculpture",
    tab: "wearables",
    color: "lilac",
    note: "[a note about building on the body ,fabric, wire, buttons, found things]",
    pages: [
      [{ src: "img-9004", w: 2207, h: 3569, title: "[Installation view]", year: "[Year]", medium: "[Exhibition, venue name]",
         caption: "[Where this was shown.]",
         alt: "Gallery view of a dress form wearing a sculpted ribcage over a plaid skirt trimmed with buttons and chain, with wall labels beside it." }],
      [
        { src: "ribs", w: 986, h: 1067, title: "Ribs", year: "[Year]", medium: "[Wire, plaster, fabric]",
          caption: "[What this piece is about.]",
          alt: "A sculpted pale ribcage bound with gold wire, worn on a dress form." },
        { src: "ribs-individual", w: 2055, h: 1590, title: "Ribs, detail", year: "[Year]", medium: "[Wire, plaster, fabric]",
          caption: "[Detail notes.]",
          alt: "Detail view of the ribcage sculpture." }
      ],
      [
        { src: "grunge", w: 1097, h: 1189, title: "Grunge", year: "[Year]", medium: "[Wool plaid, buttons, safety pins, chain]",
          caption: "[What this piece is about.]",
          alt: "A plaid wool skirt on a dress form, its hem lined with rows of colored buttons, with safety pin chains and silver chain draped below." },
        { src: "grunge-individual", w: 3018, h: 2345, title: "Grunge, detail", year: "[Year]", medium: "[Wool plaid, buttons, safety pins, chain]",
          caption: "[Detail notes.]",
          alt: "Detail view of the plaid skirt with button trim." }
      ],
      [{ src: "img-1814", w: 2922, h: 2379, title: "[Untitled]", year: "[Year]", medium: "[Cables, beads, fabric]",
         caption: "[What this piece is about.]",
         alt: "A red bra covered in coiled white, grey and black cables with beaded paisley shapes, its straps made of headphone and charging cables." }],
      [
        { src: "overall-installation-shot-artt200-project1", w: 3669, h: 3024, title: "[ARTT 200, project 1]", year: "[Year]", medium: "[Folded paper]",
          caption: "[What this piece is about.]",
          alt: "A triangular relief of white folded paper pyramids arranged in a tessellating pattern." },
        { src: "alternate-installation-shot-artt200-project1", w: 4032, h: 2573, title: "[ARTT 200, project 1], alternate view", year: "[Year]", medium: "[Folded paper]",
          caption: "[Detail notes.]",
          alt: "Alternate angle of the folded paper relief." }
      ]
    ]
  },
  {
    id: "digital-3d",
    title: "Digital & 3D",
    tab: "digital",
    color: "sky",
    note: "[a note about your digital work ,Processing sketches, Maya, Unreal]",
    pages: [
      [{ src: "turner-a3jellies-ss", w: 2338, h: 1312, title: "Jellies", year: "[Year]", medium: "[Processing / 3D render]",
         caption: "[What this piece is about.]",
         alt: "Digital scene of glossy blue and pink spheres, a curving lilac tube and a pink wire mesh among drifting droplets on a turquoise ground." }],
      [
        { src: "turner-a4sodapop-ss", w: 2494, h: 1396, title: "Soda Pop", year: "[Year]", medium: "[Particle system]",
          caption: "[What this piece is about.]",
          alt: "An aqua underwater scene where a figure is made of drifting square particles, with light rippling from above." }
      ],
      [
        { src: "screenshot-2025-02-12-174433", w: 2494, h: 1397, title: "Soda Pop, still", year: "[Year]", medium: "[Particle system]",
          caption: "", alt: "A still of the particle figure underwater." },
        { src: "screenshot-2025-02-12-174320", w: 2495, h: 1399, title: "Soda Pop, still", year: "[Year]", medium: "[Particle system]",
          caption: "", alt: "Another still of the particle figure underwater." },
        { src: "screenshot-2025-02-12-174709", w: 2339, h: 1313, title: "Soda Pop, still", year: "[Year]", medium: "[Particle system]",
          caption: "", alt: "A third still of the particle figure underwater." }
      ],
      [
        { src: "screenshot-2025-03-11-164552", w: 1603, h: 1279, title: "[Model name]", year: "[Year]", medium: "[Maya]",
          caption: "[What you were modeling and why.]",
          alt: "Maya viewport of a gold box-headed robot with a tiny crown, standing on a white chalice-shaped pedestal." },
        { src: "screenshot-2025-03-11-173334", w: 1033, h: 999, title: "[Model name], wireframe", year: "[Year]", medium: "[Maya]",
          caption: "", alt: "The same model shown with its wireframe, with crossed swords behind the pedestal." }
      ],
      [{ src: "unreal-reliquary", type: "video", w: 1280, h: 720, title: "[Reliquary]", year: "2026", medium: "[Unreal Engine]",
         caption: "[A walkthrough of the scene. Link the full video here.]",
         alt: "Short silent clip flying through an Unreal Engine environment." }],
      [
        { src: "reliquary-landscape", w: 1920, h: 1048, title: "[Reliquary], landscape", year: "2026", medium: "[Unreal Engine]",
          caption: "", alt: "Unreal Engine landscape view of the reliquary scene." },
        { src: "reliquary-snip", w: 1920, h: 1048, title: "[Reliquary], detail", year: "2026", medium: "[Unreal Engine]",
          caption: "", alt: "Close view of the reliquary in Unreal Engine." }
      ],
      [
        { src: "relic", w: 1920, h: 1048, title: "[Relic]", year: "2026", medium: "[Unreal Engine]",
          caption: "", alt: "A relic object in an Unreal Engine scene." },
        { src: "alien-sculpture", w: 1920, h: 1048, title: "[Alien sculpture]", year: "2026", medium: "[Unreal Engine]",
          caption: "", alt: "An alien sculpture in an Unreal Engine scene." }
      ],
      [
        { src: "castle", w: 1920, h: 1048, title: "[Castle]", year: "2026", medium: "[Unreal Engine]",
          caption: "", alt: "A castle in an Unreal Engine scene." },
        { src: "landscape-snip", w: 1920, h: 1048, title: "[Landscape]", year: "2026", medium: "[Unreal Engine]",
          caption: "", alt: "An Unreal Engine landscape." },
        { src: "topview", w: 1920, h: 1048, title: "[Top view]", year: "2026", medium: "[Unreal Engine]",
          caption: "", alt: "Top-down view of an Unreal Engine environment." }
      ],
      [{ src: "artchive-tour", type: "video", w: 1280, h: 720, title: "Artchive", year: "[Year]", medium: "[Unreal Engine, virtual gallery]",
         caption: "[A tour of your virtual gallery. Link the full video here.]",
         alt: "Short silent clip touring a virtual gallery building." }],
      [{ src: "artchive-building-capture", w: 1920, h: 1048, title: "Artchive, exterior", year: "[Year]", medium: "[Unreal Engine]",
         caption: "", alt: "Exterior of the Artchive virtual gallery building." }]
    ]
  }
];
