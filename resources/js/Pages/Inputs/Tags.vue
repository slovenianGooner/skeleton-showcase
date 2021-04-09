<template>
  <div class="p-8">
    <XPageHeader
      title="Tags"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Inputs',
          href: '/inputs',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    />
    <XCard class="mt-8" title="Simple" :overflows="false">
      <div>
        <XInputLabel for="tags"> Tags </XInputLabel>
        <div class="mt-1">
          <XInputTags
            v-model="form.tags"
            :options="tags.map((tag) => tag.text)"
          />
        </div>
      </div>
      <div class="mt-4 prose" v-html="form.tags"></div>
    </XCard>
  </div>
</template>
<script>
import {
  XPageHeader,
  XCard,
  XInputErrors,
  XInputLabel,
  XInputTags,
} from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XCard,
    XInputErrors,
    XInputLabel,
    XInputTags,
  },
  data() {
    return {
      form: {
        tags: [],
      },
      tags: [
        {
          text: "2020",
        },
        {
          text: "adria mobil",
        },
        {
          text: "virtual views",
        },
        {
          text: "caravans",
        },
        {
          text: "action",
        },
        {
          text: "adora",
        },
        {
          text: "alpina",
        },
        {
          text: "altea",
        },
        {
          text: "aviva",
        },
        {
          text: "motorhomes",
        },
        {
          text: "compact",
        },
        {
          text: "compact axess",
        },
        {
          text: "compact plus",
        },
        {
          text: "compact supreme",
        },
        {
          text: "coral",
        },
        {
          text: "coral axess",
        },
        {
          text: "coral plus",
        },
        {
          text: "coral supreme",
        },
        {
          text: "coral xl",
        },
        {
          text: "coral xl axess",
        },
        {
          text: "coral xl plus",
        },
        {
          text: "matrix",
        },
        {
          text: "matrix axess",
        },
        {
          text: "matrix plus",
        },
        {
          text: "matrix supreme",
        },
        {
          text: "sonic",
        },
        {
          text: "sonic axess",
        },
        {
          text: "sonic plus",
        },
        {
          text: "sonic supreme",
        },
        {
          text: "vans",
        },
        {
          text: "twin axess",
        },
        {
          text: "twin plus",
        },
        {
          text: "twin supreme",
        },
        {
          text: "product layouts",
        },
        {
          text: "astella",
        },
        {
          text: "_838_compact sls",
        },
        {
          text: "_839_compact sc",
        },
        {
          text: "_m32_matrix 640 dc",
        },
        {
          text: "active",
        },
        {
          text: "photos",
        },
        {
          text: "videos",
        },
        {
          text: "catalogues",
        },
        {
          text: "sun living",
        },
        {
          text: "2019",
        },
        {
          text: "layout",
        },
        {
          text: "613 ul",
        },
        {
          text: "673 pk",
        },
        {
          text: "593 uk",
        },
        {
          text: "522 up t",
        },
        {
          text: "753 uc",
        },
        {
          text: "472 up",
        },
        {
          text: "542 ul",
        },
        {
          text: "573 pt",
        },
        {
          text: "753 uk",
        },
        {
          text: "502 ul",
        },
        {
          text: "572 ut",
        },
        {
          text: "612 dl seine",
        },
        {
          text: "613 dt isonzo",
        },
        {
          text: "623 dt sava",
        },
        {
          text: "613 ht",
        },
        {
          text: "613 ut",
        },
        {
          text: "593 up",
        },
        {
          text: "612 dl aus",
        },
        {
          text: "612 dp aus",
        },
        {
          text: "g12 pt slide out",
        },
        {
          text: "613 ut thames",
        },
        {
          text: "exterior",
        },
        {
          text: "twin",
        },
        {
          text: "interior",
        },
        {
          text: "render",
        },
        {
          text: "cutout",
        },
        {
          text: "supreme",
        },
        {
          text: "factory fitted option",
        },
        {
          text: "600 spb",
        },
        {
          text: "air condition",
        },
        {
          text: "plus",
        },
        {
          text: "640 slb",
        },
        {
          text: "roof",
        },
        {
          text: "tent",
        },
        {
          text: "back",
        },
        {
          text: "front",
        },
        {
          text: "side",
        },
        {
          text: "axess",
        },
        {
          text: "600 spt",
        },
        {
          text: "detail",
        },
        {
          text: "tv",
        },
        {
          text: "installation",
        },
        {
          text: "double floor",
        },
        {
          text: "kitchen",
        },
        {
          text: "working surface",
        },
        {
          text: "sink",
        },
        {
          text: "drawers",
        },
        {
          text: "top",
        },
        {
          text: "fridge",
        },
        {
          text: "refrigerator",
        },
        {
          text: "storage",
        },
        {
          text: "wardrobe",
        },
        {
          text: "bathroom",
        },
        {
          text: "toilette",
        },
        {
          text: "wc",
        },
        {
          text: "washing basin",
        },
        {
          text: "bowl",
        },
        {
          text: "wall",
        },
        {
          text: "shower",
        },
        {
          text: "thule",
        },
        {
          text: "tent roof",
        },
        {
          text: "sitting group",
        },
        {
          text: "dinette",
        },
        {
          text: "seats",
        },
        {
          text: "isofix",
        },
        {
          text: "iso fix",
        },
        {
          text: "child seat",
        },
        {
          text: "garage",
        },
        {
          text: "bed",
        },
        {
          text: "cooker",
        },
        {
          text: "table",
        },
        {
          text: "surface",
        },
        {
          text: "solar panel",
        },
        {
          text: "gb",
        },
        {
          text: "uk",
        },
        {
          text: "panoramic window",
        },
        {
          text: "sleeping",
        },
        {
          text: "additional bed",
        },
        {
          text: "lh",
        },
        {
          text: "361",
        },
        {
          text: "blue",
        },
        {
          text: "361lh",
        },
        {
          text: "361 lh",
        },
        {
          text: "de",
        },
        {
          text: "graphite",
        },
        {
          text: "green",
        },
        {
          text: "brunello black",
        },
        {
          text: "image",
        },
        {
          text: "bunk bed",
        },
        {
          text: "3 burner",
        },
        {
          text: "cooking",
        },
        {
          text: "open",
        },
        {
          text: "ergo",
        },
        {
          text: "closed",
        },
        {
          text: "391",
        },
        {
          text: "ph",
        },
        {
          text: "lifting",
        },
        {
          text: "391ph",
        },
        {
          text: "391 ph",
        },
        {
          text: "sitting",
        },
        {
          text: "group",
        },
        {
          text: "grill",
        },
        {
          text: "barbecue",
        },
        {
          text: "lifestyle",
        },
        {
          text: "nature",
        },
        {
          text: "512up",
        },
        {
          text: "512 up",
        },
        {
          text: "studio",
        },
        {
          text: "522 up",
        },
        {
          text: "613 dt",
        },
        {
          text: "isonzo",
        },
        {
          text: "control panel",
        },
        {
          text: "753up",
        },
        {
          text: "753 up",
        },
        {
          text: "663ht",
        },
        {
          text: "663 ht",
        },
        {
          text: "plan",
        },
        {
          text: "663",
        },
        {
          text: "ht",
        },
        {
          text: "bedroom",
        },
        {
          text: "pommery",
        },
        {
          text: "oven",
        },
        {
          text: "613",
        },
        {
          text: "ut",
        },
        {
          text: "613ut",
        },
        {
          text: "concave",
        },
        {
          text: "colorado",
        },
        {
          text: "613dl",
        },
        {
          text: "613 dl",
        },
        {
          text: "542 pk",
        },
        {
          text: "542pk",
        },
        {
          text: "552pt",
        },
        {
          text: "552 pt",
        },
        {
          text: "552",
        },
        {
          text: "pt",
        },
        {
          text: "472pk",
        },
        {
          text: "472",
        },
        {
          text: "pk",
        },
        {
          text: "472 pk",
        },
        {
          text: "360 dk",
        },
        {
          text: "360",
        },
        {
          text: "dk",
        },
        {
          text: "360dk",
        },
        {
          text: "compact slideout",
        },
        {
          text: "670 sl",
        },
        {
          text: "open salon",
        },
        {
          text: "driving",
        },
        {
          text: "position",
        },
        {
          text: "xl",
        },
        {
          text: "660 sp",
        },
        {
          text: "611",
        },
        {
          text: "249",
        },
        {
          text: "691",
        },
        {
          text: "670sl",
        },
        {
          text: "m 670 sl",
        },
        {
          text: "600 sc",
        },
        {
          text: "white",
        },
        {
          text: "700 sc",
        },
        {
          text: "i 700 sl",
        },
        {
          text: "700 sl",
        },
        {
          text: "silver",
        },
        {
          text: "integrated lifting bed",
        },
        {
          text: "lifting bed",
        },
        {
          text: "roof bed",
        },
        {
          text: "710 sc",
        },
        {
          text: "a series",
        },
        {
          text: "s series",
        },
        {
          text: "v series",
        },
        {
          text: "2018",
        },
        {
          text: "a60sp",
        },
        {
          text: "a70dk",
        },
        {
          text: "a75dp",
        },
        {
          text: "a75sl",
        },
        {
          text: "s60sp",
        },
        {
          text: "s65sl",
        },
        {
          text: "s70df",
        },
        {
          text: "s70sl",
        },
        {
          text: "s70sc",
        },
        {
          text: "s70dk",
        },
        {
          text: "s75sl",
        },
        {
          text: "s75sc",
        },
        {
          text: "s70sp",
        },
        {
          text: "v60sp",
        },
        {
          text: "v65sl",
        },
        {
          text: "virtual",
        },
        {
          text: "virtual view",
        },
        {
          text: "360 view",
        },
        {
          text: "360°",
        },
        {
          text: "391 pd",
        },
        {
          text: "gerald",
        },
        {
          text: "cross grey",
        },
        {
          text: "edgar",
        },
        {
          text: "flavie",
        },
        {
          text: "altea4four",
        },
        {
          text: "362 lh",
        },
        {
          text: "bahia",
        },
        {
          text: "492 lu",
        },
        {
          text: "402 ph",
        },
        {
          text: "gilles",
        },
        {
          text: "542 ph",
        },
        {
          text: "432 px",
        },
        {
          text: "472 kp",
        },
        {
          text: "552 pk",
        },
        {
          text: "400 ps",
        },
        {
          text: "522 pt",
        },
        {
          text: "442 ph",
        },
        {
          text: "honduras grey",
        },
        {
          text: "florian",
        },
        {
          text: "nathan",
        },
        {
          text: "dl",
        },
        {
          text: "paol",
        },
        {
          text: "leather nubuck",
        },
        {
          text: "zanna",
        },
        {
          text: "670 sl",
        },
        {
          text: "gael",
        },
        {
          text: "fr",
        },
        {
          text: "670sc",
        },
        {
          text: "670 sc",
        },
        {
          text: "severe",
        },
        {
          text: "600 sl",
        },
        {
          text: "600 sp",
        },
        {
          text: "edward",
        },
        {
          text: "mathisse",
        },
        {
          text: "670 dc",
        },
        {
          text: "670 dl",
        },
        {
          text: "700 dc",
        },
        {
          text: "bronson",
        },
        {
          text: "600 spb family",
        },
        {
          text: "leather",
        },
        {
          text: "640 sgx",
        },
        {
          text: "vaast",
        },
        {
          text: "aus",
        },
        {
          text: "361 lt",
        },
        {
          text: "391 lh",
        },
        {
          text: "613 pk",
        },
        {
          text: "612 pt slide out",
        },
        {
          text: "763 uk",
        },
        {
          text: "753 ht",
        },
        {
          text: "663 pt",
        },
        {
          text: "663 uk",
        },
        {
          text: "90 ht",
        },
        {
          text: "903 ht dk",
        },
        {
          text: "573 up",
        },
        {
          text: "613 ul colorado",
        },
        {
          text: "753 hk",
        },
        {
          text: "753 hk int",
        },
        {
          text: "583 lp",
        },
        {
          text: "623 uc mississipi",
        },
        {
          text: "altea4four 362 lh",
        },
        {
          text: "622 dp dart",
        },
        {
          text: "492 dt aire",
        },
        {
          text: "622 dk avon",
        },
        {
          text: "612 dl tyne",
        },
        {
          text: "472 pu",
        },
        {
          text: "402 ph au",
        },
        {
          text: "up au",
        },
        {
          text: "552 pk au",
        },
        {
          text: "360 dd",
        },
        {
          text: "de",
        },
        {
          text: "563 pt",
        },
        {
          text: "472 pk au",
        },
        {
          text: "400 dk",
        },
        {
          text: "600 sp family",
        },
        {
          text: "640 sl",
        },
        {
          text: "540 sp",
        },
        {
          text: "600 spx",
        },
        {
          text: "640 spx",
        },
        {
          text: "side view",
        },
        {
          text: "germany",
        },
        {
          text: "deutsch",
        },
        {
          text: "british",
        },
        {
          text: "grey",
        },
        {
          text: "living space",
        },
        {
          text: "living",
        },
        {
          text: "bed from dinette",
        },
        {
          text: "berths",
        },
        {
          text: "berth",
        },
        {
          text: "cooking surface",
        },
        {
          text: "kitchen surface",
        },
        {
          text: "bunkbed",
        },
        {
          text: "2 burner",
        },
        {
          text: "stove",
        },
        {
          text: "burner",
        },
        {
          text: "window",
        },
        {
          text: "toilet",
        },
        {
          text: "ouside barbecue",
        },
        {
          text: "inside from the doors",
        },
        {
          text: "outside",
        },
        {
          text: "outside barbecue",
        },
        {
          text: "portable barbecue",
        },
        {
          text: "landscape",
        },
        {
          text: "mattress",
        },
        {
          text: "sticker",
        },
        {
          text: "textile",
        },
        {
          text: "brunello mint",
        },
        {
          text: "textile option",
        },
        {
          text: "movie",
        },
        {
          text: "video",
        },
        {
          text: "lifestyle video",
        },
        {
          text: "product video",
        },
        {
          text: "sunroof",
        },
        {
          text: "living area",
        },
        {
          text: "living comfort",
        },
        {
          text: "seating comfort",
        },
        {
          text: "seating",
        },
        {
          text: "seating group",
        },
        {
          text: "cooking area",
        },
        {
          text: "kitchen area",
        },
        {
          text: "kitchen burner",
        },
        {
          text: "ergo bathroom",
        },
        {
          text: "sleeping comfort",
        },
        {
          text: "cupboards",
        },
        {
          text: "television",
        },
        {
          text: "seating area",
        },
        {
          text: "bathroom sink",
        },
        {
          text: "sockets",
        },
        {
          text: "detial",
        },
        {
          text: "control management",
        },
        {
          text: "adora 522 up",
        },
        {
          text: "adora 613 dt isonzo",
        },
        {
          text: "mattrass",
        },
        {
          text: "leather mathisse",
        },
        {
          text: "leather mathisse gb",
        },
        {
          text: "edgar gb",
        },
        {
          text: "side window",
        },
        {
          text: "sitting area",
        },
        {
          text: "kitchen sink",
        },
        {
          text: "bedroom detail",
        },
        {
          text: "longitudinal beds",
        },
        {
          text: "cover",
        },
        {
          text: "winter",
        },
        {
          text: "lifetsyle",
        },
        {
          text: "alpina 583 lp",
        },
        {
          text: "alpna 583 lp",
        },
        {
          text: "couple in the dinette",
        },
        {
          text: "dinning area",
        },
        {
          text: "lady dinning",
        },
        {
          text: "couple reading",
        },
        {
          text: "kite",
        },
        {
          text: "girl with a kite",
        },
        {
          text: "pommery gb",
        },
        {
          text: "leather mathise",
        },
        {
          text: "morgan",
        },
        {
          text: "gb caravan",
        },
        {
          text: "gb altea",
        },
        {
          text: "uk caravan",
        },
        {
          text: "uk altea",
        },
        {
          text: "u dinette",
        },
        {
          text: "plugs",
        },
        {
          text: "worktop",
        },
        {
          text: "parents bed",
        },
        {
          text: "bedoroom",
        },
        {
          text: "children",
        },
        {
          text: "toys",
        },
        {
          text: "usb",
        },
        {
          text: "mirror",
        },
        {
          text: "lavatory",
        },
        {
          text: "foldable",
        },
        {
          text: "option",
        },
        {
          text: "external kitchen unit",
        },
        {
          text: "modular kitchen",
        },
        {
          text: "dog",
        },
        {
          text: "loading",
        },
        {
          text: "doors",
        },
        {
          text: "washing the dog",
        },
        {
          text: "lights",
        },
        {
          text: "multimedia",
        },
        {
          text: "usb socket",
        },
        {
          text: "loudspeakers",
        },
        {
          text: "bluetooth",
        },
        {
          text: "windows",
        },
        {
          text: "pillows",
        },
        {
          text: "microwave",
        },
        {
          text: "storage detail",
        },
        {
          text: "girl",
        },
        {
          text: "dog in caravan",
        },
        {
          text: "child playing",
        },
        {
          text: "girl in caravan",
        },
        {
          text: "family",
        },
        {
          text: "caravan in nature",
        },
        {
          text: "camping",
        },
        {
          text: "table outside",
        },
        {
          text: "mother and girl in caravan",
        },
        {
          text: "uk altea",
        },
        {
          text: "gb altea",
        },
        {
          text: "interior bed",
        },
        {
          text: "caravan mattress",
        },
        {
          text: "altea mattress",
        },
        {
          text: "caravan textile",
        },
        {
          text: "interior textile",
        },
        {
          text: "altea textile",
        },
        {
          text: "textile render",
        },
        {
          text: "flavie textile option",
        },
        {
          text: "elie textile option",
        },
        {
          text: "gilles textile option",
        },
        {
          text: "uk textile",
        },
        {
          text: "gb textile",
        },
        {
          text: "fb",
        },
        {
          text: "clip",
        },
        {
          text: "short video",
        },
        {
          text: "fb clip",
        },
        {
          text: "short",
        },
        {
          text: "lighting",
        },
        {
          text: "family layout",
        },
        {
          text: "accessories",
        },
        {
          text: "faucet",
        },
        {
          text: "toliet",
        },
        {
          text: "roof window",
        },
        {
          text: "sp",
        },
        {
          text: "parent bed",
        },
        {
          text: "owen",
        },
        {
          text: "bath",
        },
        {
          text: "yogi",
        },
        {
          text: "matress",
        },
        {
          text: "leather edward",
        },
        {
          text: "total",
        },
        {
          text: "separate beds",
        },
        {
          text: "beds together",
        },
        {
          text: "separate beds together",
        },
        {
          text: "separated bed",
        },
        {
          text: "integrated sink",
        },
        {
          text: "l kitchen",
        },
        {
          text: "sky roof",
        },
        {
          text: "comfort",
        },
        {
          text: "textiles",
        },
        {
          text: "france",
        },
        {
          text: "central bed",
        },
        {
          text: "space",
        },
        {
          text: "salon",
        },
        {
          text: "panorama",
        },
        {
          text: "alkoven bed",
        },
        {
          text: "lifted",
        },
        {
          text: "bed closed",
        },
        {
          text: "kitchen block",
        },
        {
          text: "toscany",
        },
        {
          text: "bed lifted",
        },
        {
          text: "nubuck",
        },
        {
          text: "rear",
        },
        {
          text: "hero",
        },
        {
          text: "island bed",
        },
        {
          text: "ambient lighting",
        },
        {
          text: "under bed",
        },
        {
          text: "bedroom storage",
        },
        {
          text: "light",
        },
        {
          text: "box",
        },
        {
          text: "bike",
        },
        {
          text: "bicycle",
        },
        {
          text: "garage box",
        },
        {
          text: "textile nathan",
        },
        {
          text: "semi dinette",
        },
        {
          text: "block shape kitchen",
        },
        {
          text: "beds",
        },
        {
          text: "door",
        },
        {
          text: "skies",
        },
        {
          text: "l dinette",
        },
        {
          text: "catalogue",
        },
        {
          text: "vans cover",
        },
        {
          text: "equipment",
        },
        {
          text: "batteries",
        },
        {
          text: "cabin",
        },
        {
          text: "arian",
        },
        {
          text: "glen",
        },
        {
          text: "griffin",
        },
        {
          text: "swiveling door",
        },
        {
          text: "handle",
        },
        {
          text: "dinete",
        },
        {
          text: "liftable bed",
        },
        {
          text: "ambient",
        },
        {
          text: "wall lining",
        },
        {
          text: "children safety",
        },
        {
          text: "kitchen storage",
        },
        {
          text: "dinette table",
        },
        {
          text: "skyroof",
        },
        {
          text: "baxter",
        },
        {
          text: "leather vaast",
        },
        {
          text: "lifetstyle",
        },
        {
          text: "kids corner",
        },
        {
          text: "ladder",
        },
        {
          text: "towing",
        },
        {
          text: "car towing caravan",
        },
        {
          text: "aviva mattress",
        },
        {
          text: "tectile render",
        },
        {
          text: "aviva textile",
        },
        {
          text: "bahia textile option",
        },
        {
          text: "honduras grey textile option",
        },
        {
          text: "rosalyn textile option",
        },
        {
          text: "florian textile option",
        },
        {
          text: "roof up",
        },
        {
          text: "night",
        },
        {
          text: "night exterior",
        },
        {
          text: "ad",
        },
        {
          text: "advert",
        },
        {
          text: "special edition",
        },
        {
          text: "940_mt02g9_coral_660_du_louis_aus.jpg",
        },
        {
          text: "2013",
        },
        {
          text: "march",
        },
        {
          text: "conference",
        },
        {
          text: "master",
        },
        {
          text: "adria",
        },
        {
          text: "dealer book",
        },
        {
          text: "logo",
        },
        {
          text: "primary logo",
        },
        {
          text: "adria logo cmyk",
        },
        {
          text: "adria logo rgb",
        },
        {
          text: "940_mt02d3_avtod_660_du_lion_aus.jpg",
        },
        {
          text: "twin-c",
        },
        {
          text: "twin-t",
        },
        {
          text: "2017",
        },
        {
          text: "940_mt02d3_coral_660_du_v27_lion_aus.jpg",
        },
        {
          text: "twin-500",
        },
        {
          text: "twin-540",
        },
        {
          text: "twin-600",
        },
        {
          text: "twin-640",
        },
        {
          text: "secondary logo",
        },
        {
          text: "_m22_matrix 670 dc.pdf",
        },
        {
          text: "_m23_matrix  670 sc.pdf",
        },
        {
          text: "tertiary logo",
        },
        {
          text: "adria logo monochromatic",
        },
        {
          text: "coral cover",
        },
        {
          text: "coralxl cover",
        },
        {
          text: "twin_cut_out_600spt_all_10r_2_new-1.png",
        },
        {
          text: "twin_cut_out_600spt_all_10r_2_new.png",
        },
        {
          text: "xtra",
        },
        {
          text: "hide away",
        },
        {
          text: "hide-away",
        },
        {
          text: "hide away seat",
        },
        {
          text: "reading lights",
        },
        {
          text: "usb",
        },
        {
          text: "extended",
        },
        {
          text: "front bed",
        },
        {
          text: "hero s75s",
        },
        {
          text: "logo",
        },
        {
          text: "slogan",
        },
        {
          text: "tagline",
        },
        {
          text: "primary",
        },
        {
          text: "secondary",
        },
        {
          text: "monochromatic",
        },
        {
          text: "negative",
        },
        {
          text: "adria benelux",
        },
        {
          text: " benelux",
        },
        {
          text: " logo",
        },
        {
          text: "logotype",
        },
        {
          text: " netherlands",
        },
        {
          text: " belgium",
        },
        {
          text: " uk",
        },
        {
          text: " gb",
        },
        {
          text: " united kingdom",
        },
        {
          text: " great britain",
        },
        {
          text: " adria concessionaries",
        },
        {
          text: " spain",
        },
        {
          text: " adria spain sl",
        },
        {
          text: " espana",
        },
        {
          text: " adria dom",
        },
        {
          text: " slovenia",
        },
        {
          text: " adria home",
        },
        {
          text: "distributor info",
        },
        {
          text: " 2018",
        },
        {
          text: " adria",
        },
        {
          text: " sun living",
        },
        {
          text: " presentation",
        },
        {
          text: "season 2019",
        },
        {
          text: " 2019",
        },
        {
          text: "season 2020",
        },
        {
          text: " 2020",
        },
        {
          text: " adria more",
        },
        {
          text: " adria plus",
        },
        {
          text: " adria center",
        },
        {
          text: " adria star",
        },
        {
          text: " 2021",
        },
        {
          text: " adria holidays",
        },
        {
          text: " adria rent",
        },
        {
          text: " adria center",
        },
        {
          text: " adria village. ",
        },
        {
          text: " advertising",
        },
        {
          text: " ad book",
        },
        {
          text: " book",
        },
        {
          text: " advertisong rules",
        },
        {
          text: " rules",
        },
        {
          text: " advertising book",
        },
        {
          text: " advertising rules",
        },
        {
          text: " distributor info",
        },
        {
          text: "pos",
        },
        {
          text: " point of sale",
        },
        {
          text: " pos rules",
        },
        {
          text: " season 2020",
        },
        {
          text: " adria logo",
        },
        {
          text: "adria holidays",
        },
        {
          text: " adria village",
        },
        {
          text: " avtohiša adria",
        },
        {
          text: " camping kozarica",
        },
        {
          text: " podgorje",
        },
        {
          text: "press",
        },
        {
          text: " press release",
        },
        {
          text: " highlights",
        },
        {
          text: " cycling club",
        },
        {
          text: " kolesarski klub",
        },
        {
          text: "cycling",
        },
        {
          text: " facebook",
        },
        {
          text: " plan",
        },
        {
          text: " calendar",
        },
        {
          text: " content",
        },
        {
          text: " content calendar",
        },
        {
          text: " facebook plan",
        },
        {
          text: " content plan",
        },
        {
          text: " fb plan",
        },
        {
          text: " december",
        },
        {
          text: " dec",
        },
        {
          text: " dec19",
        },
        {
          text: "facebook plan",
        },
        {
          text: "fb plan",
        },
        {
          text: " editorial calendar",
        },
        {
          text: "market metric data",
        },
        {
          text: "monthly reports",
        },
        {
          text: "competition benchmark",
        },
        {
          text: "adria",
        },
        {
          text: " positioning",
        },
        {
          text: " benchmark",
        },
        {
          text: " season 2021",
        },
        {
          text: " caravan",
        },
        {
          text: " caravans",
        },
        {
          text: " motorhome",
        },
        {
          text: " motorhomes",
        },
        {
          text: "different content projects",
        },
        {
          text: " mpc",
        },
        {
          text: " multi purpose camper",
        },
        {
          text: " van",
        },
        {
          text: " active",
        },
        {
          text: " interior",
        },
        {
          text: " lifestyle",
        },
        {
          text: " landscape",
        },
        {
          text: "adv form",
        },
        {
          text: "factory",
        },
        {
          text: " production",
        },
        {
          text: " exterior",
        },
        {
          text: "482 lu",
        },
        {
          text: "outdoor",
        },
        {
          text: "people",
        },
        {
          text: "stock",
        },
        {
          text: "roof down",
        },
        {
          text: "rear bed",
        },
        {
          text: "half position",
        },
        {
          text: "washbasin",
        },
        {
          text: "chatain",
        },
        {
          text: "jeanin",
        },
        {
          text: "louis",
        },
        {
          text: "mt02g9",
        },
        {
          text: "mt02i0",
        },
        {
          text: "mt02k3",
        },
        {
          text: "chataine",
        },
        {
          text: "iron grey metallic",
        },
        {
          text: "199",
        },
        {
          text: "red",
        },
        {
          text: "505",
        },
        {
          text: "baltic orange metallic",
        },
        {
          text: "549",
        },
        {
          text: "silver aluminium metallic",
        },
        {
          text: "632",
        },
        {
          text: "black metallic",
        },
        {
          text: "classic",
        },
        {
          text: "chic",
        },
        {
          text: "punch",
        },
        {
          text: "calmness",
        },
        {
          text: "half plan",
        },
        {
          text: "bed together",
        },
        {
          text: "duane",
        },
        {
          text: "mt02j8",
        },
        {
          text: "mt02j9",
        },
        {
          text: "mt02k2",
        },
        {
          text: "serenity",
        },
        {
          text: "cupboard",
        },
        {
          text: "lining",
        },
        {
          text: "mosquito net",
        },
        {
          text: "shade",
        },
        {
          text: "catalogue cover",
        },
        {
          text: "orange",
        },
        {
          text: "black",
        },
        {
          text: "black metalic",
        },
        {
          text: "leather chester",
        },
        {
          text: "leather alexia",
        },
        {
          text: "mt02j5",
        },
        {
          text: "mt02j6",
        },
        {
          text: "chester",
        },
        {
          text: "mt02j7",
        },
        {
          text: "view",
        },
        {
          text: "camera",
        },
        {
          text: "gas",
        },
        {
          text: "bottle",
        },
        {
          text: "tend",
        },
        {
          text: "factory fitted options",
        },
        {
          text: "truma",
        },
        {
          text: "graphic",
        },
        {
          text: "caravan",
        },
        {
          text: "pd",
        },
        {
          text: "361pd",
        },
        {
          text: "361 pd",
        },
        {
          text: "612dl",
        },
        {
          text: "612 dl",
        },
        {
          text: "613dt",
        },
        {
          text: "612dl",
        },
        {
          text: "613dt",
        },
        {
          text: "santiago",
        },
        {
          text: "u sitting group",
        },
        {
          text: "alde",
        },
        {
          text: "teenager lounge",
        },
        {
          text: "youth",
        },
        {
          text: "corner",
        },
        {
          text: "drawer",
        },
        {
          text: "double door",
        },
        {
          text: "673pk",
        },
        {
          text: "andes",
        },
        {
          text: "leather fumo",
        },
        {
          text: "vicenza",
        },
        {
          text: "613ul",
        },
        {
          text: "bedrom",
        },
        {
          text: "mocha brown",
        },
        {
          text: "663uk",
        },
        {
          text: "ul",
        },
        {
          text: "613 uc",
        },
        {
          text: "613uc",
        },
        {
          text: "missouri",
        },
        {
          text: "separate",
        },
        {
          text: "542 dk",
        },
        {
          text: "542dk",
        },
        {
          text: "quentin brown",
        },
        {
          text: "472 lu",
        },
        {
          text: "controller",
        },
        {
          text: "severn",
        },
        {
          text: "silverstone",
        },
        {
          text: "mirka",
        },
        {
          text: "quentin blue",
        },
        {
          text: "quentin",
        },
        {
          text: "brown",
        },
        {
          text: "savona grey",
        },
        {
          text: "kids",
        },
        {
          text: "honduras",
        },
        {
          text: "havana",
        },
        {
          text: "carmen",
        },
        {
          text: "mt02h8",
        },
        {
          text: "mt02j1",
        },
        {
          text: "sl",
        },
        {
          text: "indoor",
        },
        {
          text: "slide out",
        },
        {
          text: "s 670 sc",
        },
        {
          text: "together",
        },
        {
          text: "670dc",
        },
        {
          text: "folded",
        },
        {
          text: "alcoven",
        },
        {
          text: "alcoven bed",
        },
        {
          text: "motorhome",
        },
        {
          text: "yvone",
        },
        {
          text: "yvonne",
        },
        {
          text: "mt02j0",
        },
        {
          text: "670dl",
        },
        {
          text: "s 670 dl",
        },
        {
          text: "s670dl",
        },
        {
          text: "leather agnes",
        },
        {
          text: "mt02g2",
        },
        {
          text: "mt02g3",
        },
        {
          text: "mt2h8",
        },
        {
          text: "mt2j0",
        },
        {
          text: "670 sp",
        },
        {
          text: "alcove",
        },
        {
          text: "a 670 sp",
        },
        {
          text: "m 670 dl",
        },
        {
          text: "bed separate",
        },
        {
          text: "all",
        },
        {
          text: "shelves",
        },
        {
          text: "m 670 sc",
        },
        {
          text: "frontal",
        },
        {
          text: "700 dc",
        },
        {
          text: "710 sl",
        },
        {
          text: "i 810 sc",
        },
        {
          text: "810 sc",
        },
        {
          text: "separated",
        },
        {
          text: "mercurius",
        },
        {
          text: "hide-away bathroom",
        },
        {
          text: "semi open",
        },
        {
          text: "standard",
        },
        {
          text: "neptunus",
        },
        {
          text: "saturnus",
        },
        {
          text: "style pack",
        },
        {
          text: "sytle pack",
        },
        {
          text: "interior height",
        },
        {
          text: "anti-mosquito",
        },
        {
          text: "sliding door",
        },
        {
          text: "rear lights",
        },
        {
          text: "absorber",
        },
        {
          text: "floor",
        },
        {
          text: "rear wall",
        },
        {
          text: "flexible day/night living space",
        },
        {
          text: "rear area",
        },
        {
          text: "day",
        },
        {
          text: "flexible",
        },
        {
          text: "hammock",
        },
        {
          text: "hammock bed",
        },
        {
          text: "hero shot",
        },
        {
          text: "power socket",
        },
        {
          text: "6th seat",
        },
        {
          text: "under the bed access",
        },
        {
          text: "access",
        },
        {
          text: "hide-away seat",
        },
        {
          text: "white table",
        },
        {
          text: "black table",
        },
        {
          text: "night shot",
        },
        {
          text: "70dk",
        },
        {
          text: "mini dinette",
        },
        {
          text: "sofa",
        },
        {
          text: "optional sofa",
        },
        {
          text: "nigh",
        },
        {
          text: "v6sl",
        },
        {
          text: "a7sl",
        },
        {
          text: "over-cab",
        },
        {
          text: "separate bathroom",
        },
        {
          text: "separate toiler",
        },
        {
          text: "l-kitchen",
        },
        {
          text: "black towe",
        },
        {
          text: "power tower",
        },
        {
          text: "s70sl",
        },
        {
          text: "dining area",
        },
        {
          text: "mesh",
        },
        {
          text: "5th seat",
        },
        {
          text: "homologated",
        },
        {
          text: "plisse blinds",
        },
        {
          text: "dashboard",
        },
        {
          text: "fiat",
        },
        {
          text: "210",
        },
        {
          text: "hide-away bathrooom",
        },
        {
          text: "reading light",
        },
        {
          text: "spot light",
        },
        {
          text: "pre-installation",
        },
        {
          text: "entrance door",
        },
        {
          text: "textile pockets",
        },
        {
          text: "workspace",
        },
        {
          text: "triton",
        },
        {
          text: " render",
        },
        {
          text: " mattress",
        },
        {
          text: "general insights",
        },
        {
          text: "design",
        },
        {
          text: "insights",
        },
        {
          text: " design",
        },
        {
          text: " duesseldorf insights",
        },
        {
          text: "technology",
        },
        {
          text: "user experience",
        },
        {
          text: "insights",
        },
        {
          text: " user experience",
        },
        {
          text: "giant world tour",
        },
        {
          text: " e-bike",
        },
        {
          text: " e bike",
        },
        {
          text: " ebike",
        },
        {
          text: " hrvoje",
        },
        {
          text: " hrvoje jurić",
        },
        {
          text: "sales and marketing",
        },
        {
          text: " sales",
        },
        {
          text: " marketing",
        },
        {
          text: "quality and sustainability",
        },
        {
          text: " quality",
        },
        {
          text: " sustainability",
        },
        {
          text: "company and brand",
        },
        {
          text: "supply chain",
        },
        {
          text: " supply",
        },
        {
          text: " chain",
        },
        {
          text: "dakar 2020",
        },
        {
          text: " adria on dakar",
        },
        {
          text: "adria awards 2019",
        },
        {
          text: "adria awards",
        },
        {
          text: " gala",
        },
        {
          text: " awards",
        },
        {
          text: " otocec",
        },
        {
          text: " otočec",
        },
        {
          text: " castle",
        },
        {
          text: " december conference",
        },
        {
          text: "brand",
        },
        {
          text: " adria brand",
        },
        {
          text: " movie",
        },
        {
          text: " video",
        },
        {
          text: " brand video",
        },
        {
          text: " brand movie",
        },
        {
          text: " what are you waiting for",
        },
        {
          text: " technology",
        },
        {
          text: "brand video",
        },
        {
          text: " sales and marketing",
        },
        {
          text: " quality and sustainability",
        },
        {
          text: " company",
        },
        {
          text: " brand",
        },
        {
          text: " company and brand",
        },
        {
          text: "production videos",
        },
        {
          text: "sun living",
        },
        {
          text: "videos",
        },
        {
          text: "eia",
        },
        {
          text: " astella",
        },
        {
          text: " adria award",
        },
        {
          text: " innovation",
        },
        {
          text: " award",
        },
        {
          text: "consumer insights / research",
        },
        {
          text: "magazine reviews",
        },
        {
          text: "avtodom",
        },
        {
          text: " slovenija",
        },
        {
          text: " slovenia",
        },
        {
          text: " slo tests",
        },
        {
          text: " slo",
        },
        {
          text: " magazine",
        },
        {
          text: " reviews",
        },
        {
          text: " magazine reviews",
        },
        {
          text: "germany",
        },
        {
          text: " de",
        },
        {
          text: " de tests",
        },
        {
          text: " german tests",
        },
        {
          text: " de magazine",
        },
        {
          text: " ger magazine",
        },
        {
          text: "france",
        },
        {
          text: " fr magazine",
        },
        {
          text: " fr",
        },
        {
          text: " fr tests",
        },
        {
          text: " french tests",
        },
        {
          text: "french",
        },
        {
          text: " german magazine",
        },
        {
          text: "italy",
        },
        {
          text: " it",
        },
        {
          text: " it magazine",
        },
        {
          text: " italian magazine",
        },
        {
          text: " italian tests",
        },
        {
          text: " it tests",
        },
        {
          text: " french magazine",
        },
        {
          text: "uk",
        },
        {
          text: " gb",
        },
        {
          text: " uk magazine",
        },
        {
          text: " gb magazine",
        },
        {
          text: " uk tests",
        },
        {
          text: " gb tests",
        },
        {
          text: "ch",
        },
        {
          text: " switzerland",
        },
        {
          text: " swiss",
        },
        {
          text: " ch magazine",
        },
        {
          text: " ch tests",
        },
        {
          text: " swiss magazine",
        },
        {
          text: " swiss tests",
        },
        {
          text: "industry research",
        },
        {
          text: "motorhome research",
        },
        {
          text: "caravan research",
        },
        {
          text: "netherlands",
        },
        {
          text: " benelux",
        },
        {
          text: "internal consumer research",
        },
        {
          text: "gigo researches",
        },
        {
          text: "other researches",
        },
        {
          text: "annual reports",
        },
        {
          text: "caravaning 2018",
        },
        {
          text: " caravaning profile",
        },
        {
          text: " statistics",
        },
        {
          text: " europe",
        },
        {
          text: " germany",
        },
        {
          text: " caravanning",
        },
        {
          text: " caravaning",
        },
        {
          text: " worldwide",
        },
        {
          text: " world",
        },
        {
          text: " trade shows",
        },
        {
          text: " tourism",
        },
        {
          text: "statistics",
        },
        {
          text: " civd",
        },
        {
          text: " trends",
        },
        {
          text: " innovations",
        },
        {
          text: "market analysis ",
        },
        {
          text: "quarterly reports",
        },
        {
          text: "sm",
        },
        {
          text: " sales and marketing report",
        },
        {
          text: " market statistics",
        },
        {
          text: " eu market data",
        },
        {
          text: "civd data",
        },
        {
          text: " civd info",
        },
        {
          text: " market situation ",
        },
        {
          text: " aftersales",
        },
        {
          text: "buschwerk reasearches",
        },
        {
          text: "sun living design",
        },
        {
          text: " internal consumer research",
        },
        {
          text: " buschwerk researches",
        },
        {
          text: "tests",
        },
        {
          text: " test",
        },
        {
          text: " review",
        },
        {
          text: " product tests",
        },
        {
          text: " caravan tests",
        },
        {
          text: " motorhome tests",
        },
        {
          text: " van tests",
        },
        {
          text: " magazines ",
        },
        {
          text: "buggyry",
        },
        {
          text: " racing",
        },
        {
          text: " czech",
        },
        {
          text: " auto vero",
        },
        {
          text: " dakar",
        },
        {
          text: "guidelines",
        },
        {
          text: "survey",
        },
        {
          text: " satisfaction",
        },
        {
          text: " distrubutors",
        },
        {
          text: " importers",
        },
        {
          text: " zadovoljstvo",
        },
        {
          text: " uvozniki",
        },
        {
          text: " distributerji",
        },
        {
          text: " distribucija",
        },
        {
          text: " anketa",
        },
        {
          text: "mach",
        },
        {
          text: " mach video",
        },
        {
          text: " marketing video",
        },
        {
          text: " presentation video",
        },
        {
          text: " german mach",
        },
        {
          text: " mach deutschland",
        },
        {
          text: " mach movi",
        },
        {
          text: "employees",
        },
        {
          text: " heroes",
        },
        {
          text: " unsung heroes",
        },
        {
          text: " workers",
        },
        {
          text: " factory workers",
        },
        {
          text: "wrap up",
        },
        {
          text: "marketing conference",
        },
        {
          text: "buggyra",
        },
        {
          text: " czech republic",
        },
        {
          text: " tatra",
        },
        {
          text: " brand positioning",
        },
        {
          text: " research",
        },
        {
          text: " survey",
        },
        {
          text: " mobile questionnaire",
        },
        {
          text: " awareness",
        },
        {
          text: " consideration",
        },
        {
          text: " associations",
        },
        {
          text: " claim testing",
        },
        {
          text: "beach",
        },
        {
          text: " beachrex",
        },
        {
          text: " beaches",
        },
        {
          text: "#beachlife",
        },
        {
          text: "beaches",
        },
        {
          text: " promo materials",
        },
        {
          text: " clothing collection",
        },
        {
          text: " dealer point of sale materials",
        },
        {
          text: "andrew ditton",
        },
        {
          text: " twin",
        },
        {
          text: " twin supreme",
        },
        {
          text: " travelling",
        },
        {
          text: " story telling",
        },
        {
          text: " scotland",
        },
        {
          text: " inspirations",
        },
        {
          text: "ditton ",
        },
        {
          text: " astella",
        },
        {
          text: "red dot ",
        },
        {
          text: "best of best",
        },
        {
          text: "winner ",
        },
        {
          text: " studio",
        },
        {
          text: " images",
        },
        {
          text: " photos",
        },
        {
          text: " shots",
        },
        {
          text: " photoshooting",
        },
        {
          text: "2021",
        },
        {
          text: "demo",
        },
        {
          text: "demo2",
        },
        {
          text: "demo3",
        },
        {
          text: " garage",
        },
        {
          text: " bike",
        },
        {
          text: "separate shower",
        },
        {
          text: " shower",
        },
        {
          text: " bed",
        },
        {
          text: " separate beds",
        },
        {
          text: " rear area",
        },
        {
          text: " white",
        },
        {
          text: " rear",
        },
        {
          text: " storage",
        },
        {
          text: " under bed",
        },
        {
          text: " closet",
        },
        {
          text: " hero",
        },
        {
          text: " s75sl",
        },
        {
          text: " hero shot",
        },
        {
          text: " bedroom",
        },
        {
          text: " under bed access",
        },
        {
          text: " bunk mode",
        },
        {
          text: " kite",
        },
        {
          text: "under bed access",
        },
        {
          text: " alcoven",
        },
        {
          text: " alcove",
        },
        {
          text: " front bed",
        },
        {
          text: " dinete",
        },
        {
          text: " mini dinette",
        },
        {
          text: " front area",
        },
        {
          text: " alcoven bed",
        },
        {
          text: " bunk bed",
        },
        {
          text: " garage mode",
        },
        {
          text: " dinette",
        },
        {
          text: "sleeping space",
        },
        {
          text: " 7th sleeping space",
        },
        {
          text: " bathroom",
        },
        {
          text: " closed",
        },
        {
          text: " sink",
        },
        {
          text: " block kitchen",
        },
        {
          text: " counter",
        },
        {
          text: " extension",
        },
        {
          text: " charger",
        },
        {
          text: "spotlights",
        },
        {
          text: " cupboard handle",
        },
        {
          text: " wooden",
        },
        {
          text: "citroen",
        },
        {
          text: " dashboard",
        },
        {
          text: " detail",
        },
        {
          text: "cup holders",
        },
        {
          text: " curtain",
        },
        {
          text: " table",
        },
        {
          text: " front",
        },
        {
          text: " back to front",
        },
        {
          text: " hide away",
        },
        {
          text: " hide-away seat",
        },
        {
          text: "leather wheel",
        },
        {
          text: "gear handle",
        },
        {
          text: " s series",
        },
        {
          text: "from top",
        },
        {
          text: " open",
        },
        {
          text: " s65sl",
        },
        {
          text: " kitchen",
        },
        {
          text: " worktop",
        },
        {
          text: " panoramic window",
        },
        {
          text: " sequence",
        },
        {
          text: " homologated",
        },
        {
          text: " toilet",
        },
        {
          text: " sofa",
        },
        {
          text: "shoe compartment",
        },
        {
          text: " shoes",
        },
        {
          text: " usb",
        },
        {
          text: "above cabin",
        },
        {
          text: " cabin storage",
        },
        {
          text: " tv preinstallation",
        },
        {
          text: " installation",
        },
        {
          text: " television",
        },
        {
          text: " absorber",
        },
        {
          text: " top",
        },
        {
          text: " small fridge",
        },
        {
          text: "drop down bed",
        },
        {
          text: " pull down bed",
        },
        {
          text: "sink cover",
        },
        {
          text: " entrance door pocket",
        },
        {
          text: " garage box",
        },
        {
          text: " big fridge",
        },
        {
          text: " l kitchen",
        },
        {
          text: " sink cover",
        },
        {
          text: " storage space",
        },
        {
          text: " above cabin",
        },
        {
          text: "l kitchen",
        },
        {
          text: " separate shower",
        },
        {
          text: "v 60sp",
        },
        {
          text: " v60sp",
        },
        {
          text: " folded bed",
        },
        {
          text: " anti-mosquito",
        },
        {
          text: " mesh screen",
        },
        {
          text: "v60sp family",
        },
        {
          text: " family bed",
        },
        {
          text: "folded bed",
        },
        {
          text: " upper bed",
        },
        {
          text: "upper bed",
        },
        {
          text: " family",
        },
        {
          text: " v60sp family",
        },
        {
          text: " wood",
        },
        {
          text: " swe",
        },
        {
          text: " sweden",
        },
        {
          text: " v series",
        },
        {
          text: " folded",
        },
        {
          text: " fb",
        },
        {
          text: " fiat",
        },
        {
          text: " silver",
        },
        {
          text: " citroen",
        },
        {
          text: " exteriror",
        },
        {
          text: " side",
        },
        {
          text: " a series",
        },
        {
          text: "lifestyle photos",
        },
        {
          text: "compact bc8_9965_bc8_9966 2 images fr_new.jpg",
        },
        {
          text: "compact_07_fr_new.jpg",
        },
        {
          text: "compact_dm_stlabs_adria_20190515_01065_a_new.jpg",
        },
        {
          text: "compact_dm_stlabs_adria_20190515_01685_new.jpg",
        },
        {
          text: "compact_s21.jpg",
        },
        {
          text: "coral xl_untitled_panorama1jpg11_new.jpg",
        },
        {
          text: "coral_[group 1] _4bc1449__4bc1463 15 images_new.jpg",
        },
        {
          text: "coral_hajres_[group 1] _4bc1449__4bc1463 15 images fr_new.jpg",
        },
        {
          text: "matrix_02_new.jpg",
        },
        {
          text: "sonic_s21.jpg",
        },
        {
          text: " press",
        },
        {
          text: " meet the new generation",
        },
        {
          text: " adora",
        },
        {
          text: " coral",
        },
        {
          text: " matrix",
        },
        {
          text: " adv",
        },
        {
          text: " v65sl",
        },
        {
          text: " brown",
        },
        {
          text: " hammock",
        },
        {
          text: "step",
        },
        {
          text: " electrical step",
        },
        {
          text: " entrance",
        },
        {
          text: " soft closing",
        },
        {
          text: " silent",
        },
        {
          text: " night",
        },
        {
          text: " separate",
        },
        {
          text: " back",
        },
        {
          text: " lockers",
        },
        {
          text: " side window",
        },
        {
          text: " textile",
        },
        {
          text: " cooker",
        },
        {
          text: " burner",
        },
        {
          text: " tina maze",
        },
        {
          text: " light",
        },
        {
          text: " spotlight",
        },
        {
          text: "640 spb family",
        },
        {
          text: " wardrobe",
        },
        {
          text: "kithcen",
        },
        {
          text: " beds",
        },
        {
          text: " interio",
        },
        {
          text: " cupboards",
        },
        {
          text: " seat",
        },
        {
          text: " drawers",
        },
        {
          text: " surface",
        },
        {
          text: " fridge",
        },
        {
          text: " refrigerator",
        },
        {
          text: " wall",
        },
        {
          text: " swivel",
        },
        {
          text: " 640 slb",
        },
        {
          text: "arno",
        },
        {
          text: " bronson",
        },
        {
          text: " fr",
        },
        {
          text: " window",
        },
        {
          text: " roof",
        },
        {
          text: " 600 spb",
        },
        {
          text: " 600 sl",
        },
        {
          text: " wurface",
        },
        {
          text: " working",
        },
        {
          text: "spotlight",
        },
        {
          text: " cabin",
        },
        {
          text: " textiles",
        },
        {
          text: " cooking surface",
        },
        {
          text: "_dsc8429c_fr.jpg",
        },
        {
          text: "_mg_1963_retusa.jpg",
        },
        {
          text: "_mg_2982c_fr.jpg",
        },
        {
          text: "_mg_3439c_fr.jpg",
        },
        {
          text: "active_background_tmg_b_pm2_livelli_ese_retusa.jpg",
        },
        {
          text: "compact_s21_fr.jpg",
        },
        {
          text: "grillot edouard 682973 unsplash_03_mod2_retusa.jpg",
        },
        {
          text: "lds 45c_fr.jpg",
        },
        {
          text: "matrix_02_new_fr.jpg",
        },
        {
          text: "sonic_s21_fr.jpg",
        },
        {
          text: "twin axess fr.jpg",
        },
        {
          text: "twin plus_4bc1526 fr.jpg",
        },
        {
          text: "2",
        },
        {
          text: "0",
        },
        {
          text: "1",
        },
        {
          text: "/",
        },
        {
          text: "a",
        },
        {
          text: "base",
        },
        {
          text: "pro",
        },
        {
          text: "twin sports",
        },
        {
          text: "sports edition",
        },
        {
          text: "sgx sports",
        },
        {
          text: "sgx sports edition",
        },
        {
          text: "pop-up tent",
        },
        {
          text: "pop-up roof",
        },
        {
          text: "supreme",
        },
        {
          text: "twin supreme",
        },
        {
          text: "exterior render",
        },
        {
          text: "exterior back",
        },
        {
          text: "twin sports edition",
        },
        {
          text: "sgx",
        },
        {
          text: "twin sgx",
        },
        {
          text: "exterior front ",
        },
        {
          text: "sports",
        },
        {
          text: "exterior side",
        },
        {
          text: "active",
        },
        {
          text: "studio video",
        },
        {
          text: "tina maze van",
        },
        {
          text: "tina maze twin",
        },
        {
          text: "tina maze",
        },
        {
          text: "winter photo",
        },
        {
          text: "exterior twin",
        },
        {
          text: "twin",
        },
        {
          text: "tina maze van",
        },
        {
          text: "tina maze twin",
        },
        {
          text: "van cover",
        },
        {
          text: "active base",
        },
        {
          text: "awning",
        },
        {
          text: "active awning",
        },
        {
          text: "roof rack",
        },
        {
          text: "active roof rack",
        },
        {
          text: "table drawer",
        },
        {
          text: "battery",
        },
        {
          text: "cooling box",
        },
        {
          text: "cooling",
        },
        {
          text: "window drawers",
        },
        {
          text: " active base",
        },
        {
          text: "driving position",
        },
        {
          text: "open bed",
        },
        {
          text: "kitchen detail",
        },
        {
          text: "living room",
        },
        {
          text: "roof racks",
        },
        {
          text: "windows drawers",
        },
        {
          text: "bed open",
        },
        {
          text: "lifitng bed",
        },
        {
          text: "lifiting bed",
        },
        {
          text: "dining",
        },
        {
          text: "gb",
        },
        {
          text: "uk version",
        },
        {
          text: "german",
        },
        {
          text: "uk version",
        },
        {
          text: "uk version",
        },
        {
          text: "sink open",
        },
        {
          text: "open sink",
        },
        {
          text: "uk caravan",
        },
        {
          text: "front direct",
        },
        {
          text: "uk adora",
        },
        {
          text: "hero adora",
        },
        {
          text: "leaflet cover",
        },
        {
          text: "adora window",
        },
        {
          text: "lady under the window",
        },
        {
          text: "adora control panel",
        },
        {
          text: "meet the new generation",
        },
        {
          text: " new adora",
        },
        {
          text: "new adora",
        },
        {
          text: "sketch",
        },
        {
          text: "drawing",
        },
        {
          text: "textile detail",
        },
        {
          text: "media controller",
        },
        {
          text: "media",
        },
        {
          text: "control",
        },
        {
          text: "kitchen drawers",
        },
        {
          text: "_dsc8612_mod.jpg",
        },
        {
          text: "_dsc8613_mod.jpg",
        },
        {
          text: "_mg_0493c_mod.jpg",
        },
        {
          text: "_mg_0494c_mod.jpg",
        },
        {
          text: "_mg_1248c_mod.jpg",
        },
        {
          text: "_mg_1362c_mod.jpg",
        },
        {
          text: "_mg_1365c_mod.jpg",
        },
        {
          text: "_mg_1371c_mod.jpg",
        },
        {
          text: "_mg_1751c.jpg",
        },
        {
          text: "_mg_1752c.jpg",
        },
        {
          text: "_mg_1754c.jpg",
        },
        {
          text: "_mg_1755c.jpg",
        },
        {
          text: "_mg_1756c.jpg",
        },
        {
          text: "_mg_2950c.jpg",
        },
        {
          text: "_mg_3616c.jpg",
        },
        {
          text: "adora_rear_bc8_7262.jpg",
        },
        {
          text: "adora_sb_lds 229.jpg",
        },
        {
          text: "adora_sb_lds 232.jpg",
        },
        {
          text: "adora_sb_lds 25c.jpg",
        },
        {
          text: "adora_sb_lds 70.jpg",
        },
        {
          text: "adora_sb_mg_0008.jpg",
        },
        {
          text: "adora_sb_mg_0130.jpg",
        },
        {
          text: "adora_sb_mg_0198.jpg",
        },
        {
          text: "adora_sb_mg_0206.jpg",
        },
        {
          text: "adora_sb_mg_0217.jpg",
        },
        {
          text: "adora_sb_mg_0243.jpg",
        },
        {
          text: "adora_sb_mg_0280.jpg",
        },
        {
          text: "adora_sb_mg_0871.jpg",
        },
        {
          text: "adora_sb_mg_0939.jpg",
        },
        {
          text: "adora_sb_mg_1416.jpg",
        },
        {
          text: "adora_sb_mg_1438.jpg",
        },
        {
          text: "adora_sb_mg_1479.jpg",
        },
        {
          text: "adora_sb_mg_1507.jpg",
        },
        {
          text: "adora_sb_mg_1541.jpg",
        },
        {
          text: "adora_sb_mg_1619.jpg",
        },
        {
          text: "adora_sb_mg_8467.jpg",
        },
        {
          text: "adora_sb_mg_8609.jpg",
        },
        {
          text: "adora_sb_mg_8879.jpg",
        },
        {
          text: "adora_sb_mg_9064.jpg",
        },
        {
          text: "adora_sb_mg_9146.jpg",
        },
        {
          text: "adora_shower_img_20200323_120823.jpg",
        },
        {
          text: "coral_sb_dsc8405.jpg",
        },
        {
          text: "coral_sb_dsc8422.jpg",
        },
        {
          text: "coral_sb_dsc8429.jpg",
        },
        {
          text: "coral_sb_dsc8438.jpg",
        },
        {
          text: "coral_sb_dsc8444.jpg",
        },
        {
          text: "coral_sb_dsc8463.jpg",
        },
        {
          text: "coral_sb_dsc8545.jpg",
        },
        {
          text: "coral_sb_dsc8605.jpg",
        },
        {
          text: "coral_sb_mg_3017.jpg",
        },
        {
          text: "coral_sb_mg_3025.jpg",
        },
        {
          text: "coral_sb_mg_3038.jpg",
        },
        {
          text: "coral_sb_mg_3041.jpg",
        },
        {
          text: "coral_sb_mg_3085.jpg",
        },
        {
          text: "coral_sb_mg_3144.jpg",
        },
        {
          text: "coral_sb_mg_3179.jpg",
        },
        {
          text: "coral_sb_mg_3212.jpg",
        },
        {
          text: "coral_sb_mg_3224.jpg",
        },
        {
          text: "coral_sb_mg_3228.jpg",
        },
        {
          text: "coral_sb_mg_3239.jpg",
        },
        {
          text: "coral_sb_mg_3246.jpg",
        },
        {
          text: "coral_sb_mg_3256.jpg",
        },
        {
          text: "coral_sb_mg_3346.jpg",
        },
        {
          text: "coral_sb_mg_3351.jpg",
        },
        {
          text: "coral_sb_mg_3379.jpg",
        },
        {
          text: "coral_sb_mg_3396.jpg",
        },
        {
          text: "coral_sb_mg_3439.jpg",
        },
        {
          text: "coral_sb_mg_3669.jpg",
        },
        {
          text: "coral_sb_mg_3690.jpg",
        },
        {
          text: "coral_sb_mg_3768.jpg",
        },
        {
          text: "coral_sb_mg_3782.jpg",
        },
        {
          text: "coral_sb_mg_3803.jpg",
        },
        {
          text: "coral_sb_mg_3831.jpg",
        },
        {
          text: "coral_sb_mg_3860.jpg",
        },
        {
          text: "dji_0069_ret.jpg",
        },
        {
          text: "dji_0080_ret.jpg",
        },
        {
          text: "img_8235.jpg",
        },
        {
          text: "img_8236.jpg",
        },
        {
          text: "img_8237.jpg",
        },
        {
          text: "img_8238.jpg",
        },
        {
          text: "img_8324.jpg",
        },
        {
          text: "img_8325.jpg",
        },
        {
          text: "img_8327.jpg",
        },
        {
          text: "img_8348.jpg",
        },
        {
          text: "img_8370.jpg",
        },
        {
          text: "img_8371.jpg",
        },
        {
          text: "img_8398.jpg",
        },
        {
          text: "img_8399.jpg",
        },
        {
          text: "l1004341_ret.jpg",
        },
        {
          text: "l1004361_ret.jpg",
        },
        {
          text: "l1004457_ret.jpg",
        },
        {
          text: "l1004508_ret.jpg",
        },
        {
          text: "l1004608_ret.jpg",
        },
        {
          text: "l1004618_ret.jpg",
        },
        {
          text: "l1004618_ret_1.jpg",
        },
        {
          text: "l1004650_ret.jpg",
        },
        {
          text: "l1004667_ret.jpg",
        },
        {
          text: "l1004838_ret.jpg",
        },
        {
          text: "l1005349_ret.jpg",
        },
        {
          text: "lds 178_mod.jpg",
        },
        {
          text: "mach image.jpg",
        },
        {
          text: "matrix_sb_lds 239.jpg",
        },
        {
          text: "matrix_sb_lds 255.jpg",
        },
        {
          text: "matrix_sb_lds 31.jpg",
        },
        {
          text: "matrix_sb_lds 45.jpg",
        },
        {
          text: "matrix_sb_lds 48.jpg",
        },
        {
          text: "matrix_sb_mg_1636.jpg",
        },
        {
          text: "matrix_sb_mg_1750.jpg",
        },
        {
          text: "matrix_sb_mg_1963.jpg",
        },
        {
          text: "matrix_sb_mg_1977.jpg",
        },
        {
          text: "matrix_sb_mg_1992.jpg",
        },
        {
          text: "matrix_sb_mg_2042.jpg",
        },
        {
          text: "matrix_sb_mg_2117.jpg",
        },
        {
          text: "matrix_sb_mg_2259.jpg",
        },
        {
          text: "matrix_sb_mg_2325.jpg",
        },
        {
          text: "matrix_sb_mg_2371.jpg",
        },
        {
          text: "matrix_sb_mg_2437.jpg",
        },
        {
          text: "matrix_sb_mg_2468.jpg",
        },
        {
          text: "matrix_sb_mg_2512.jpg",
        },
        {
          text: "matrix_sb_mg_2516.jpg",
        },
        {
          text: "matrix_sb_mg_2538.jpg",
        },
        {
          text: "matrix_sb_mg_2623.jpg",
        },
        {
          text: "matrix_sb_mg_2669.jpg",
        },
        {
          text: "matrix_sb_mg_2684.jpg",
        },
        {
          text: "matrix_sb_mg_2692.jpg",
        },
        {
          text: "matrix_sb_mg_2698.jpg",
        },
        {
          text: "matrix_sb_mg_2765.jpg",
        },
        {
          text: "matrix_sb_mg_2820.jpg",
        },
        {
          text: "matrix_sb_mg_2870.jpg",
        },
        {
          text: "matrix_sb_mg_2879.jpg",
        },
        {
          text: "matrix_sb_mg_2894.jpg",
        },
        {
          text: "twin cover21_hpa8200.jpg",
        },
        {
          text: "altea gb",
        },
        {
          text: "alpina uk",
        },
        {
          text: "adora uk",
        },
        {
          text: "cover uk",
        },
        {
          text: "caravan cover",
        },
        {
          text: "action uk",
        },
        {
          text: "shower chamber",
        },
        {
          text: "rear view",
        },
        {
          text: "exterior detail",
        },
        {
          text: "adora gb",
        },
        {
          text: "air flow",
        },
        {
          text: "back view",
        },
        {
          text: "front view",
        },
        {
          text: "new rear lights",
        },
        {
          text: "rear lights detail",
        },
        {
          text: "quality and sustainability",
        },
        {
          text: "cover photo",
        },
        {
          text: "twin sports edition",
        },
        {
          text: "x indd",
        },
        {
          text: "int_motorhomes 2021_06 folder",
        },
        {
          text: "int caravan eco 2021 03 folder",
        },
        {
          text: "int motorhome eco 2021_04 folder",
        },
        {
          text: "int motorhome eco 2021_04.idml",
        },
        {
          text: "int motorhome eco 2021_04.indd",
        },
        {
          text: "document fonts",
        },
        {
          text: "links",
        },
        {
          text: "dinette detail",
        },
        {
          text: "lighting detail",
        },
        {
          text: "shower detail",
        },
        {
          text: "bathroom detail",
        },
        {
          text: "oven detail",
        },
        {
          text: "dart ",
        },
        {
          text: "comprex",
        },
        {
          text: "comprex wall ",
        },
        {
          text: "comprex floor",
        },
        {
          text: "textile bluestar",
        },
        {
          text: "astella textile ",
        },
        {
          text: "textile silverstar",
        },
        {
          text: "relaxing",
        },
        {
          text: "climatic chamber",
        },
        {
          text: "image detail",
        },
        {
          text: "living room detail",
        },
        {
          text: "table detail",
        },
        {
          text: "connected living ",
        },
        {
          text: "sleeping area",
        },
        {
          text: "adria mobil",
        },
        {
          text: "gas compartment",
        },
        {
          text: "hero night",
        },
        {
          text: "aviva textile",
        },
        {
          text: "sports",
        },
        {
          text: "sgx",
        },
        {
          text: "sgx sports edition",
        },
        {
          text: "sgx sports",
        },
        {
          text: "pop top roof",
        },
        {
          text: "pop-top roof",
        },
        {
          text: "pop-top",
        },
        {
          text: "bed entrance",
        },
        {
          text: "twin sports",
        },
        {
          text: "sports edition",
        },
        {
          text: "twin sgx",
        },
        {
          text: "sporo",
        },
        {
          text: "inetr",
        },
        {
          text: "facebook",
        },
        {
          text: "van textile ",
        },
        {
          text: "motorhome textile",
        },
        {
          text: "compact textile",
        },
        {
          text: "bathroom storage",
        },
        {
          text: "slide out back",
        },
        {
          text: "coral textile",
        },
        {
          text: "coral textile",
        },
        {
          text: "coffee",
        },
        {
          text: "coffee machine",
        },
        {
          text: "nespresso",
        },
        {
          text: "motorhomes",
        },
        {
          text: "new garage box",
        },
        {
          text: "moro interior",
        },
        {
          text: "motorhome cover",
        },
        {
          text: "sunroof closed",
        },
        {
          text: "sunroof detail",
        },
        {
          text: "tina maze cover",
        },
        {
          text: "face to face",
        },
        {
          text: "face to face dinette",
        },
        {
          text: "brand movie",
        },
        {
          text: " adventures movie",
        },
        {
          text: " covid",
        },
        {
          text: " mach presentation",
        },
        {
          text: " why choose",
        },
        {
          text: " why choose adria",
        },
        {
          text: " factory",
        },
        {
          text: " manufacturing",
        },
        {
          text: " sun living production",
        },
        {
          text: " adria brand video",
        },
        {
          text: " sun living brand video",
        },
        {
          text: "october conference",
        },
        {
          text: " wrap up",
        },
        {
          text: " season 2022",
        },
        {
          text: " sl",
        },
        {
          text: "december",
        },
        {
          text: " zoom",
        },
        {
          text: " recording",
        },
        {
          text: " awards 2020",
        },
        {
          text: " adria awards 2020",
        },
        {
          text: " dinner",
        },
        {
          text: "mach workshop january 2021",
        },
        {
          text: "brand book",
        },
        {
          text: " brand books",
        },
        {
          text: "gates",
        },
        {
          text: "2020-2021",
        },
        {
          text: "gate 1",
        },
        {
          text: "textile bench",
        },
        {
          text: "autumn calmness",
        },
        {
          text: "cherry punch",
        },
        {
          text: "ocean serenity",
        },
        {
          text: "sophisticated classic",
        },
        {
          text: "spring garden",
        },
        {
          text: "violet chick",
        },
        {
          text: "gate 0",
        },
        {
          text: " marketing conference",
        },
        {
          text: " february",
        },
        {
          text: " tina maze video",
        },
        {
          text: " new generation tina maze",
        },
        {
          text: " social media",
        },
        {
          text: " product",
        },
        {
          text: " launch",
        },
        {
          text: " march conference",
        },
        {
          text: "season 22",
        },
        {
          text: " product book",
        },
        {
          text: "product books",
        },
        {
          text: " adria product book",
        },
        {
          text: " sun living product book",
        },
        {
          text: "gate 2",
        },
        {
          text: "gate 3",
        },
        {
          text: "gate 4",
        },
      ],
    };
  },
};
</script>
