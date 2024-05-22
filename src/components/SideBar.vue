<template>
  <aside>
    <div>
      <div class="sidebar-header">
        <img class="logo" src="../assets/logo.png" alt="iotech" />
        <button class="colapse" :icon="['fas', 'circle-chevron-left']"></button>
      </div>
      <div class="sidebar" v-for="page in pages" :key="page.title">
        <button
          :style="{
            backgroundColor: page.clicked
              ? 'rgb(223, 235, 255)'
              : 'transparent',
            color: page.clicked ? 'black' : 'white',
            border: rounded - r - xl,
          }"
          class="rounded-card"
          :key="button"
          @click="openTabm(page.title), redirectTabm(page.title)"
          
        >
          <font-awesome-icon class="icon fa-fw" :icon="page.icon" />
          {{ page.title }}
        </button>
        <div class="child" v-if="page.openTab">
          <div v-for="child in page.children" :key="child.title">
            <button
              :style="{
                backgroundColor: child.clicked
                  ? 'rgb(223, 235, 255)'
                  : 'transparent',
                color: child.clicked ? 'black' : 'white',
                border: rounded - r - xl,
              }"
              class="rounded-card"
              :key="button"
              @click="openTabmChild(page.title, child.title), redirectTabChildm(child.title)"
            >
              <font-awesome-icon class="icon fa-fw" :icon="child.icon" />
              {{ child.title }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    openTabm(page_title) {
      this.pages.find((x) => x.title === page_title).openTab = !this.pages.find(
        (x) => x.title === page_title
      ).openTab;
      this.pages.find((x) => x.title === page_title).clicked = !this.pages.find(
        (x) => x.title === page_title
      ).clicked;
      this.pages.forEach((navbar_item) => {
        if (navbar_item.title != page_title) {
          navbar_item.clicked = false;
          navbar_item.openTab = false;
        }
      });
    },
    openTabmChild(page_title, child_title){
      this.pages.map((navbar_item)=>{
        if(navbar_item.title === page_title){
          navbar_item.children.map((navbar_child)=>{
            if(navbar_child.title === child_title){
              navbar_child.clicked = true
            }else{
              navbar_child.clicked = false
            }
          })
        }
      })
    },

    redirectTabm(page_title) {
      console.log(page_title);
      if (page_title === 'Dashboard') {
        this.$router.push('/dashboard')
      } else if (page_title === 'Work') {
        this.$router.push('/mywork')
      } else if (page_title === 'Account') {
        this.$router.push('/myaccount')
      } else if (page_title === 'ioGamify') {
        this.$router.push('/myperformance')
      } else if (page_title === 'Projects') {
        this.$router.push('/charts')
      } else if (page_title === 'Rules') {
        this.$router.push('/rules')
      }
    },

    redirectTabChildm(child_title) {
      console.log(child_title);
      if (child_title === 'My Work') {
        this.$router.push('/mywork')
      } else if (child_title === 'Records') {
        this.$router.push('/records')
      } else if (child_title === 'Times') {
        this.$router.push('/times')
      } else if (child_title === 'Logs') {
        this.$router.push('/logs')
      } else if (child_title === 'PO') {
        this.$router.push('/po')
      } else if (child_title === 'SM') {
        this.$router.push('/sm')
      } else if (child_title === 'My Account') {
        this.$router.push('/myaccount')
      } else if (child_title === 'Salary') {
        this.$router.push('/salary')
      } else if (child_title === 'History') {
        this.$router.push('/history')
      } else if (child_title === 'My Performance') {
        this.$router.push('/myperformance')
      } else if (child_title === 'Rewards') {
        this.$router.push('/rewards')
      } else if (child_title === 'View Awards') {
        this.$router.push('/awards')
      } else if (child_title === 'Charts') {
        this.$router.push('/charts')
      } else if (child_title === 'Table') {
        this.$router.push('/table')
      }

    }
  },
    data() {
      return {
        pages: [
          {
            title: "Dashboard",
            icon: ['fas', 'desktop'],
            openTab: false,
            clicked: false,
            redirectTab: false,
          },
          {
            title: "Work",
            icon: ["fas", "briefcase"],
            openTab: false,
            clicked: false,
            children: [
              {
                title: "My Work",
                icon: ["fas", "house-laptop"],
                openTab: false,
                clicked: true,
              },
              {
                title: "Records",
                icon: ["fas", "clipboard"],
                openTab: false,
                clicked: false,
              },
              {
                title: "Time",
                icon: ["fas", "clock"],
                openTab: false,
                clicked: false,
              },
              {
                title: "Logs",
                icon: ["fas", "paste"],
                openTab: false,
                clicked: false,
              },
              {
                title: "PO",
                icon: ["fas", "address-book"],
                openTab: false,
                clicked: false,
              },
              {
                title: "SM",
                icon: ["fas", "address-book"],
                openTab: false,
                clicked: false,
              },
            ],
          },
          {
            title: "Account",
            icon: ["fas", "user"],
            openTab: false,
            clicked: false,
            children: [
              {
                title: "My Account",
                icon: ["fas", "user"],
                openTab: false,
                clicked: true,
              },
              {
                title: "Salary",
                icon: ["fas", "money-bill-wave"],
                openTab: false,
                clicked: false,
              },
              {
                title: "History",
                icon: ["fas", "clock-rotate-left"],
                openTab: false,
                clicked: false,
              },
            ],
          },
          {
            title: "ioGamify",
            icon: ["fas", "gamepad"],
            openTab: false,
            children: [
              {
                title: "My Performance",
                icon: ["fas", "ranking-star"],
                openTab: false,
                clicked: true,
              },
              {
                title: "Rewards",
                icon: ["fas", "gift"],
                openTab: false,
                clicked: false,
              },
              {
                title: "View Awards",
                icon: ["fas", "trophy"],
                openTab: false,
                clicked: false,
              },
            ],
          },
          {
            title: "Projects",
            icon: ["fas", "folder-closed"],
            openTab: false,
            clicked: false,
            children: [
              {
                title: "Charts",
                icon: ["fas", "chart-simple"],
                openTab: false,
                clicked: true,
              },
              {
                title: "Table",
                icon: ["fas", "table"],
                openTab: false,
                clicked: false,
              },
            ],
          },
          {
            title: "Rules",
            icon: ["fas", "newspaper"],
            openTab: false,
            clicked: false,
          },
        ],
      };
    }
  }
</script>

<style scoped>

.sidebar-header {
  display: flex;
  padding: 0rem 2.8125rem 0rem 2.8125rem;
}
.rounded-card {
  border-radius: 3.125rem;
}

.icon {
  margin-right: 0.75rem;
  image-resolution: 0.125rem;
}

.child {
  margin-top: 0.3125rem;
  margin-left: 1.25rem;
}

.sidebar {
  margin-top: 0.9375rem;
  text-align: left;
  margin-left: 1.25rem;
}

.sidebar button {
  background: transparent;
  color: white;
  border-color: transparent;
}

.clicked {
  background: lightblue;
  border-radius: 0.75rem;
  color: black;
  border-color: transparent;
  position: 1.875rem;
}

.logo {
  margin-top: 1.25rem;
  width: 9.375rem;
  margin-bottom: 0.625rem;
}

aside {
  display: flex;
  flex-direction: column;
  width: 15.625rem;
  min-height: 100vh;
  padding-top: 0rem;

  background-color: #1c3e70;
  color: #ffffff;

  transition: 0.2s ease-out;

  @media (max-width: 48rem) {
    position: fixed;
    z-index: 99;
  }
}
</style>
