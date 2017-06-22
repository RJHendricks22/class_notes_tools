export default [
  {
    "id": 0,
    "image": "http://www.tokkoro.com/picsup/1042764-forest.jpg",
    "text": "You awake lying in the bracken of a dark, twisted forest. Your back and head are killing you. Reaching up to touch your temple, you wince with pain and your fingertips come away bloody. \nYou see faint, flickering light to the East of you. There’s a frenzied stomping and snorting coming from the North. To the West there’s nothing but more black, twisted forest. Suddenly, you hear rustling coming from the underbrush to the South.",
    "options": [
      { "label": "Go East", "to": 2 },
      { "label": "Go North", "to": 3 },
      { "label": "Go West", "to": 1 },
      { "label": "Go South", "to": 4 }
    ]
  },

  {
    "id": 1,
    "image": "https://drscdn.500px.org/photo/92622267/q%3D80_m%3D1500/c78425b4618ca9c93f52cd60b988f556",
    "text": "After walking in darkness for what feels like forever, you approach a bridge in the gloomy woods. As the wind blows through the trees, you can hear the boards creak as the bridge gently sways. It’s impossible to see what is below or how far across the bridge stretches...",
    "options": [
      { "label": "Try to cross the bridge", "to": 5 },
      { "label": "Turn around", "to": 0 },
    ]
  },

  {
    "id": 2,
    "image": "http://pre13.deviantart.net/aa26/th/pre/i/2014/012/6/1/dark_cabin_by_fireleafburn-d71xexx.jpg",
    "text": "The flickering lights turn out to be coming from inside a cabin. As you approach the lights suddenly go out and you’re surrounded by darkness.",
    "options": [
      { "label": "Slowly approach the cabin", "to": 6 },
      { "label": "Run back from where you came", "to": 0 },
    ]
  },

  {
    "id": 3,
    "image": "https://images.gr-assets.com/hostedimages/1463618517ra/19139236.gif",
    "text": "Before you can react a pack of wolves surround you. They draw themselves in around you, circling patiently. The first quick movement you make to turn and run causes the entire gang of beasts to pounce, tearing your body apart limb from limb.",
    "ending": {
      "text": "You Lose",
      "code": "red"
    }
  },

  {
    "id": 4,
    "image": "http://images.hamodia.com/hamod-uploads/2014/08/Woods-1-1024x768.jpg",
    "text": "It turns out the rustling was a search party looking for YOU! They are all relieved to see you and help bring you back to town. You arrive back at your motel, still unsure of how you found yourself in the woods with a wounded head. While you may never figure it out, at least you survived.",
    "ending": {
      "text": "You Sort Of Win!",
      "code": "yellow"
    }
  },

  {
    "id": 5,
    "image": "https://1.bp.blogspot.com/-vVwRY_0gDpw/VuEOWYKcA9I/AAAAAAAAAGM/fXUCyhMNtAE/s1600/drowning-girl-sea-water-favim-com-112419.jpg",
    "text": "As you step across the bridge you hear the ropes begin to snap. You try to dash to the other side but the bridge twists and the planks detach from under your feet. As you plummet into the cold, dark water below you hear a faint echo of laughter from the woods above.",
    "ending": {
      "text": "You Lose",
      "code": "red"
    }
  },

  {
    "id": 6,
    "image": "http://gazetahimik.ru/wp-content/uploads/2015/08/siluet.jpg",
    "text": "As you near the cabin you notice the door is slightly open. Pushing it open gently lets out an audible creak. Before you can react a large group of figures with axes and bats swarm you, smashing your body up against the windows.",
    "ending": {
      "text": "You Lose",
      "code": "red"
    }
  }
];
