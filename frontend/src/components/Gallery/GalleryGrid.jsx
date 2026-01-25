 
const galleryItems = [
  { title: "Main Building", category: "Campus", color: "#cfe3ff",
    images:[
      {src:"/images/mainbuilding.jpeg",
       caption:"Main Building of KPS Tendua"},

      {src:"/images/mb2.jpeg",
        caption:"Overall View of Main Building"
      },
      ],
  },
  { title: "Annual Sports Day", category: "Sports", color: "#c9fdd7",
     images:[
      {src:"/images/sports.jpeg",
       caption:"Sports at KPS Tendua"},

      {src:"/images/sports2.jpeg",
        caption:"Decorated Sports Ground"
      },
      ],
   },
  { title: "Science Exhibition", category: "Academics", color: "#fff3a0",
     images:[
      {src:"/images/se.jpeg",
       caption:"Students Presenting Science Projects"},

      {src:"/images/se2.jpeg",
        caption:"Decorated Science Exhibition Area"
      },
      ],
   },
  { title: "Smart Classrooms", category: "Academics", color: "#ffd6ec",
     images:[
      {src:"/images/smartclass.jpeg",
       caption:"Modern Smart Classroom Setup"},

      {src:"/images/smartclass2.jpeg",
        caption:"Interactive Learning in Smart Classrooms"
      },
      ],
   },
  { title: "Independence Day", category: "Celebrations", color: "#e4e5f1",
     images:[
      {src:"/images/iday.jpeg",
       caption:"Singing competition on Independence Day"},

      {src:"/images/iday2.jpeg",
        caption:"Prayers on Independence Day"
      },
      ],
   },
  { title: "School Library", category: "Campus", color: "#ffddb0",
     images:[
      {src:"/images/lib.jpeg",
       caption:"Students Reading in School Library"},
      ],
   },
  { title: "Cricket Tournament", category: "Sports", color: "#9ef3e2",
     images:[
      {src:"/images/cricket.jpeg",
       caption:"Cricket team in action"},
      ],
   },
  { title: "Annual Day", category: "Events", color: "#ffd1d1",
     images:[
      {src:"/images/ad.avif",
       caption:"Dance performance on Annual Day"},
      ],
   },
  { title: "Diwali Celebration", category: "Celebrations", color: "#cfd9ff",
    images:[
      {src:"/images/dc.jpeg",
       caption:"Diwali Celebration at KPS Tendua"},
      ],
   },
];

const GalleryGrid = ({ activeCategory }) => {
  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="gallery-grid">
      {filteredItems.map((item, index) => (
        <GalleryCard key={index} item={item} />
      ))}
    </section>
  );
};

export default GalleryGrid;
