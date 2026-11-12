# Personal Portfolio - Siphiwe

{
  "portfolio": {
    "meta": {
      "title": "Siphiwe Malindi — Portfolio",
      "charset": "UTF-8",
      "viewport": "width=device-width, initial-scale=1.0",
      "fonts": [
        {
          "family": "Playfair Display",
          "weights": [400, 700, 900],
          "styles": ["normal", "italic"],
          "usage": "Section headings, editorial display text"
        },
        {
          "family": "Dancing Script",
          "weights": [700],
          "styles": ["normal"],
          "usage": "Hero cursive title, script accents"
        },
        {
          "family": "DM Sans",
          "weights": [300, 400, 500],
          "styles": ["normal"],
          "usage": "Body text, navigation, labels"
        },
        {
          "family": "Bebas Neue",
          "weights": [400],
          "styles": ["normal"],
          "usage": "Hero name, skill card titles"
        }
      ]
    },

    "theme": {
      "colors": {
        "pink": "#F2408A",
        "hot_pink": "#FF1F7D",
        "soft_pink": "#FDDDE6",
        "cream": "#FDF6F0",
        "dark": "#1A1A1A",
        "charcoal": "#2D2D2D",
        "yellow": "#FFE234",
        "blue": "#3A7BFF",
        "teal": "#00C2A8",
        "orange": "#FF6B35",
        "purple": "#8B5CF6",
        "white": "#FFFFFF"
      },
      "typography": {
        "body_font": "DM Sans, sans-serif",
        "display_font": "Playfair Display, serif",
        "script_font": "Dancing Script, cursive",
        "bebas_font": "Bebas Neue, sans-serif"
      },
      "global": {
        "background": "cream",
        "text_color": "dark",
        "scroll_behavior": "smooth",
        "cursor": "none"
      }
    },

    "cursor": {
      "dot": {
        "width": "12px",
        "height": "12px",
        "background": "pink",
        "border_radius": "50%",
        "position": "fixed",
        "z_index": 9999,
        "transition": "transform 0.1s, width 0.2s, height 0.2s, background 0.2s",
        "hover_state": {
          "width": "20px",
          "height": "20px",
          "background": "hot_pink"
        }
      },
      "ring": {
        "width": "40px",
        "height": "40px",
        "border": "1.5px solid pink",
        "border_radius": "50%",
        "position": "fixed",
        "z_index": 9998,
        "opacity": 0.6,
        "lag_factor": 0.15,
        "hover_state": {
          "width": "60px",
          "height": "60px",
          "opacity": 0.3
        }
      }
    },

    "navigation": {
      "id": "mainNav",
      "position": "fixed",
      "z_index": 100,
      "logo": {
        "text": "Studio",
        "highlight": "Siphiwe Malindi",
        "font": "DM Sans",
        "font_weight": 300,
        "href": "#home"
      },
      "scroll_effect": {
        "trigger_px": 60,
        "class": "scrolled",
        "background": "rgba(253,246,240,0.92)",
        "backdrop_filter": "blur(12px)",
        "border_bottom": "1px solid rgba(242,64,138,0.15)"
      },
      "links": [
        { "label": "Home",             "href": "#home",             "type": "link" },
        { "label": "About",            "href": "#about",            "type": "link" },
        { "label": "Services",         "href": "#services",         "type": "link" },
        { "label": "Technical Skills", "href": "#technical-skills", "type": "link" },
        { "label": "Portfolio",        "href": "#portfolio",        "type": "link" },
        { "label": "Contact",          "href": "#contact",          "type": "cta_button" }
      ]
    },

    "marquee": {
      "background": "pink",
      "border_top": "2px solid dark",
      "border_bottom": "2px solid dark",
      "animation_duration": "20s",
      "direction": "left",
      "items": [
        "Creative Developer",
        "UI/UX Design",
        "Java Developer",
        "Frontend Engineer",
        "Problem Solver",
        "Creative Mind",
        "Open to Work",
        "Full Stack"
      ]
    },

    "sections": {

      "hero": {
        "id": "home",
        "type": "hero",
        "min_height": "100vh",
        "layout": "flex_column_end",
        "padding_bottom": "80px",
        "background": {
          "type": "photo_upload",
          "fallback_gradient": "linear-gradient(135deg, #1A1A1A 0%, #2D1A2E 40%, #F2408A 100%)",
          "overlay": "linear-gradient(160deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.4) 50%, rgba(255,31,125,0.3) 100%)",
          "upload_hint": "Click to upload your photo"
        },
        "available_pill": {
          "dot_color": "#4ADE80",
          "dot_animation": "pulse 2s ease-in-out infinite",
          "text": "Available for freelance work",
          "animation": "fadeUp 0.5s ease forwards 0.2s"
        },
        "content": [
          {
            "element": "eyebrow",
            "text": "Welcome to my world",
            "font": "DM Sans",
            "font_size": "11px",
            "color": "pink",
            "letter_spacing": "0.25em",
            "text_transform": "uppercase",
            "animation": "fadeUp 0.6s ease forwards 0.3s"
          },
          {
            "element": "title_cursive",
            "text": "Portfolio",
            "font": "Dancing Script",
            "font_size": "clamp(100px, 18vw, 200px)",
            "color": "white",
            "animation": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards 0.5s"
          },
          {
            "element": "name",
            "text": "Siphiwe Malindi",
            "highlight_word": "Malindi",
            "highlight_color": "pink",
            "font": "Bebas Neue",
            "font_size": "clamp(48px, 7vw, 96px)",
            "color": "white",
            "letter_spacing": "0.06em",
            "animation": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards 1.1s"
          }
        ],
        "scroll_indicator": {
          "position": "absolute right 48px bottom 80px",
          "label": "Scroll",
          "line_height": "60px",
          "animation": "fadeIn 0.5s ease forwards 1.8s"
        }
      },

      "about": {
        "id": "about",
        "label": "About Me",
        "tag": { "text": "About Me", "style": "tag_pink" },
        "background": "white",
        "heading": {
          "small": "Hey, I'm",
          "big": "Siphiwe",
          "script": "Malindi —",
          "script_color": "pink"
        },
        "layout": "two_column_grid",
        "gap": "80px",
        "content": {
          "text_blocks": [
            "I'm a passionate developer and designer based in South Africa, blending code and creativity to build digital experiences that don't just function — they feel alive.",
            "From pixel-perfect interfaces to robust backend systems, I thrive at the intersection of logic and aesthetics. Every project is a new story told through design and technology.",
            "When I'm not writing code, I'm exploring new design trends, sketching concepts, or collaborating with ambitious brands who want to stand out in a crowded digital world."
          ],
          "stats": [
            { "number": "3+", "label": "Years Experience" },
            { "number": "20+", "label": "Projects Built" },
            { "number": "5", "label": "Languages" }
          ]
        },
        "photo_frame": {
          "id": "aboutImg",
          "height": "580px",
          "border_radius": "16px",
          "hover_border": "pink",
          "hover_scale": 1.04,
          "upload_enabled": true
        },
        "decorative_blob": {
          "color": "rgba(242,64,138,0.15)",
          "size": "500px",
          "position": "top:-100px right:-100px"
        }
      },

      "services": {
        "id": "services",
        "label": "Services",
        "tag": { "text": "What I Do", "style": "tag_blue" },
        "background": "cream",
        "heading": {
          "small": "Helping your business",
          "big": "Get Closer",
          "big_color": "blue",
          "script": "to your Goals —",
          "script_color": "dark"
        },
        "subtitle": "From concept to deployment, I bring your ideas to life with modern tools and thoughtful design.",
        "layout": "photo_left_cards_right",
        "photo_column_width": "380px",
        "photo_frame": {
          "id": "servicesImg",
          "height": "560px",
          "border_radius": "16px",
          "upload_enabled": true
        },
        "items": [
          {
            "number": "01",
            "title": "Frontend Development",
            "description": "Crafting responsive, pixel-perfect user interfaces using HTML, CSS, and JavaScript that deliver outstanding user experiences.",
            "cta": "Learn More →",
            "cta_href": "#contact"
          },
          {
            "number": "02",
            "title": "Backend Development",
            "description": "Building robust server-side applications with Java and C++, ensuring performance, security, and scalability.",
            "cta": "Learn More →",
            "cta_href": "#contact"
          },
          {
            "number": "03",
            "title": "UI/UX Design",
            "description": "Designing intuitive, beautiful digital products that connect with users and elevate brand presence across every touchpoint.",
            "cta": "Learn More →",
            "cta_href": "#contact"
          },
          {
            "number": "04",
            "title": "Technical Consulting",
            "description": "Strategic guidance for digital transformation — from architecture decisions to technology stack selection and roadmap planning.",
            "cta": "Learn More →",
            "cta_href": "#contact"
          }
        ],
        "card_hover": {
          "padding_shift": "12px left",
          "background_tint": "rgba(242,64,138,0.04)",
          "arrow_rotate": "45deg",
          "arrow_bg": "pink",
          "arrow_color": "white"
        }
      },

      "technical_skills": {
        "id": "technical-skills",
        "label": "Technical Skills",
        "tag": { "text": "Tech Stack", "style": "tag_yellow" },
        "background": "dark",
        "heading": {
          "small": "My",
          "small_color": "rgba(255,255,255,0.4)",
          "big": "Technical",
          "big_color": "white",
          "script": "Skills —",
          "script_color": "pink"
        },
        "subtitle": "The languages and tools I use to bring ideas to life.",
        "grid_columns": 3,
        "skills": [
          {
            "id": "java",
            "name": "Java",
            "icon": "☕",
            "level": "Advanced · OOP & DSA",
            "proficiency_percent": 88,
            "gradient": "linear-gradient(135deg, #FF6B35 0%, #FF9C6B 100%)",
            "animation_delay": "0.05s"
          },
          {
            "id": "cpp",
            "name": "C++",
            "icon": "⚙️",
            "level": "Intermediate · Systems Programming",
            "proficiency_percent": 72,
            "gradient": "linear-gradient(135deg, #3A7BFF 0%, #7BA8FF 100%)",
            "animation_delay": "0.1s"
          },
          {
            "id": "javascript",
            "name": "JavaScript",
            "icon": "🟨",
            "level": "Advanced · ES6+ & Frameworks",
            "proficiency_percent": 90,
            "gradient": "linear-gradient(135deg, #F7B731 0%, #FFD966 100%)",
            "animation_delay": "0.15s"
          },
          {
            "id": "css",
            "name": "CSS",
            "icon": "🎨",
            "level": "Advanced · Animations & Layouts",
            "proficiency_percent": 94,
            "gradient": "linear-gradient(135deg, #00C2A8 0%, #5DE8D4 100%)",
            "animation_delay": "0.2s"
          },
          {
            "id": "html",
            "name": "HTML",
            "icon": "🌐",
            "level": "Expert · Semantic & Accessible",
            "proficiency_percent": 96,
            "gradient": "linear-gradient(135deg, #F2408A 0%, #FF7DB5 100%)",
            "animation_delay": "0.25s"
          },
          {
            "id": "extras",
            "name": "& More",
            "icon": "🔮",
            "level": "Git · SQL · React · Node.js",
            "proficiency_percent": 78,
            "gradient": "linear-gradient(135deg, #8B5CF6 0%, #B794F4 100%)",
            "animation_delay": "0.3s"
          }
        ],
        "skill_card_hover": {
          "transform": "translateY(-8px) scale(1.02)",
          "overlay": "rgba(255,255,255,0.06)"
        },
        "skill_bar_animation": {
          "trigger": "scroll_into_view",
          "duration": "0.8s",
          "easing": "cubic-bezier(0.16,1,0.3,1)"
        },
        "photo_frames": [
          { "id": "skillsImg1", "height": "220px", "upload_enabled": true, "animation_delay": "0.1s" },
          { "id": "skillsImg2", "height": "220px", "upload_enabled": true, "animation_delay": "0.2s" },
          { "id": "skillsImg3", "height": "220px", "upload_enabled": true, "animation_delay": "0.3s" }
        ]
      },

      "portfolio": {
        "id": "portfolio",
        "label": "Portfolio",
        "tag": { "text": "My Work", "style": "tag_teal" },
        "background": "cream",
        "heading": {
          "small": "View Our",
          "small_color": "#999",
          "big": "Recent",
          "big_color": "teal",
          "script": "Work —",
          "script_color": "dark"
        },
        "header_cta": {
          "text": "See All Projects →",
          "href": "#contact"
        },
        "layout": "asymmetric_grid",
        "grid_columns": 2,
        "projects": [
          {
            "id": "project_1",
            "title": "Student Management System",
            "category": "Java · Backend",
            "placeholder_gradient": "linear-gradient(135deg, #FDDDE6 0%, #fddeff 100%)",
            "grid_span": "large",
            "upload_enabled": true,
            "animation_delay": "0.05s"
          },
          {
            "id": "project_2",
            "title": "Interactive Dashboard UI",
            "category": "JavaScript · Frontend",
            "placeholder_gradient": "linear-gradient(135deg, #1A1A1A 0%, #2D1A2E 100%)",
            "grid_span": "normal",
            "upload_enabled": true,
            "animation_delay": "0.1s"
          },
          {
            "id": "project_3",
            "title": "E-Commerce Landing Page",
            "category": "HTML · CSS · Design",
            "placeholder_gradient": "linear-gradient(135deg, #E0EBFF 0%, #c8e0ff 100%)",
            "grid_span": "normal",
            "upload_enabled": true,
            "animation_delay": "0.15s"
          },
          {
            "id": "project_4",
            "title": "Data Structures Library",
            "category": "C++ · Systems",
            "placeholder_gradient": "linear-gradient(135deg, #EDE9FF 0%, #c8bfff 100%)",
            "grid_span": "normal",
            "upload_enabled": true,
            "animation_delay": "0.2s"
          },
          {
            "id": "project_5",
            "title": "REST API Service",
            "category": "JavaScript · Node.js",
            "placeholder_gradient": "linear-gradient(135deg, #FFE9DF 0%, #ffc8ae 100%)",
            "grid_span": "normal",
            "upload_enabled": true,
            "animation_delay": "0.25s"
          }
        ],
        "card_hover": {
          "transform": "translateY(-8px)",
          "box_shadow": "0 20px 60px rgba(0,0,0,0.1)",
          "image_scale": 1.06,
          "overlay_opacity": 1,
          "overlay_label": "View Project →"
        }
      },

      "contact": {
        "id": "contact",
        "label": "Contact",
        "tag": { "text": "Get In Touch", "style": "tag_orange" },
        "background": "white",
        "heading": {
          "small": "Let's work",
          "big": "Together —",
          "big_color": "pink",
          "script": "Say Hello!",
          "script_color": "orange"
        },
        "subtitle": "Have a project in mind? I'd love to hear about it. Let's create something amazing together.",
        "layout": "two_column_grid",
        "contact_items": [
          {
            "icon": "📧",
            "icon_bg": "ci_pink",
            "label": "Email",
            "value": "hello@siphiwemalindi.dev"
          },
          {
            "icon": "📍",
            "icon_bg": "ci_blue",
            "label": "Location",
            "value": "South Africa"
          },
          {
            "icon": "💼",
            "icon_bg": "ci_teal",
            "label": "Available For",
            "value": "Freelance & Full-time"
          }
        ],
        "photo_frames": [
          { "id": "contactImg1", "height": "200px", "upload_enabled": true },
          { "id": "contactImg2", "height": "200px", "upload_enabled": true }
        ],
        "form": {
          "fields": [
            { "name": "first_name",  "type": "text",     "label": "First Name",     "placeholder": "Your name",              "row": 1 },
            { "name": "last_name",   "type": "text",     "label": "Last Name",      "placeholder": "Your surname",           "row": 1 },
            { "name": "email",       "type": "email",    "label": "Email Address",  "placeholder": "you@example.com",        "row": 2 },
            { "name": "subject",     "type": "text",     "label": "Subject",        "placeholder": "What's this about?",     "row": 3 },
            { "name": "message",     "type": "textarea", "label": "Message",        "placeholder": "Tell me about your project...", "row": 4 }
          ],
          "submit_button": {
            "text": "Send Message →",
            "background": "pink",
            "color": "white",
            "border_radius": "50px",
            "hover_transform": "translateY(-3px)",
            "hover_shadow": "0 12px 32px rgba(242,64,138,0.4)"
          }
        }
      }
    },

    "scroll_animations": {
      "observer_threshold": 0.1,
      "root_margin": "0px 0px -60px 0px",
      "animation_types": {
        "reveal":       { "initial": "opacity:0; transform:translateY(40px)",  "final": "opacity:1; transform:translateY(0)",  "duration": "0.7s", "easing": "cubic-bezier(0.16,1,0.3,1)" },
        "reveal_left":  { "initial": "opacity:0; transform:translateX(-40px)", "final": "opacity:1; transform:translateX(0)", "duration": "0.7s", "easing": "cubic-bezier(0.16,1,0.3,1)" },
        "reveal_right": { "initial": "opacity:0; transform:translateX(40px)",  "final": "opacity:1; transform:translateX(0)", "duration": "0.7s", "easing": "cubic-bezier(0.16,1,0.3,1)" }
      }
    },

    "photo_upload": {
      "accepted_types": "image/*",
      "method": "FileReader",
      "encoding": "base64_data_url",
      "on_upload": "show image, hide upload hint placeholder",
      "upload_points": [
        { "id": "heroImg",      "section": "hero",             "description": "Full-screen hero background photo" },
        { "id": "aboutImg",     "section": "about",            "description": "About section portrait" },
        { "id": "servicesImg",  "section": "services",         "description": "Services section side photo" },
        { "id": "skillsImg1",   "section": "technical_skills", "description": "Skills grid photo 1" },
        { "id": "skillsImg2",   "section": "technical_skills", "description": "Skills grid photo 2" },
        { "id": "skillsImg3",   "section": "technical_skills", "description": "Skills grid photo 3" },
        { "id": "project_1",    "section": "portfolio",        "description": "Project 1 cover image" },
        { "id": "project_2",    "section": "portfolio",        "description": "Project 2 cover image" },
        { "id": "project_3",    "section": "portfolio",        "description": "Project 3 cover image" },
        { "id": "project_4",    "section": "portfolio",        "description": "Project 4 cover image" },
        { "id": "project_5",    "section": "portfolio",        "description": "Project 5 cover image" },
        { "id": "contactImg1",  "section": "contact",          "description": "Contact section photo 1" },
        { "id": "contactImg2",  "section": "contact",          "description": "Contact section photo 2" }
      ]
    },

    "footer": {
      "background": "dark",
      "logo": {
        "text": "Siphiwe",
        "highlight": "Malindi",
        "font": "Dancing Script",
        "font_size": "36px"
      },
      "social_links": [
        { "icon": "🐙", "label": "GitHub",    "href": "#" },
        { "icon": "💼", "label": "LinkedIn",  "href": "#" },
        { "icon": "🐦", "label": "Twitter",   "href": "#" },
        { "icon": "📸", "label": "Instagram", "href": "#" }
      ],
      "social_hover": {
        "background": "pink",
        "border_color": "pink",
        "transform": "translateY(-3px)"
      },
      "copyright": "© 2025 Siphiwe Malindi. All rights reserved.",
      "footer_links": [
        { "label": "Home",     "href": "#home" },
        { "label": "About",    "href": "#about" },
        { "label": "Services", "href": "#services" },
        { "label": "Contact",  "href": "#contact" }
      ]
    }
  }
}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://siphiwe-malindi-portfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/68adc1bb-39de-42a7-9220-239fde525f16).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
