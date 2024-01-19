<template>
  <aside>
    <div>
      <img class="logo" src="../assets/logo.png" alt="iotech" />
      <div class="sidebar" v-for="page in pages" :key="page.title">
        <button @click="openTabm(page.title)">
            <font-awesome-icon class="icon" :icon="page.icon"/>
            {{ page.title }}
        </button>
        <div class="child" v-if="page.openTab">
          <div v-for="child in page.children" :key="child.title">
            <button>
                <font-awesome-icon class="icon" :icon="child.icon"/>
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
    },
  },
  data() {
    return {
      pages: [
        {
          title: "Dashboard",
          openTab: false,
          icon: ['fas', 'desktop']
        },
        {
          title: "Work",
          openTab: false,
          icon: ['fas', 'briefcase'],
          children: [
            {
              title: "My Work",
              icon: ['fas', 'house-laptop'],
            },
            {
              title: "Records",
              icon: ['fas', 'clipboard'],
            },
            {
              title: "Time",
              icon: ['fas', 'clock'],
            },
            {
              title: "Logs",
              icon: ['fas', 'paste'],
            },
            {
              title: "PO",
              icon: ['fas', 'address-book'],
            },
            {
              title: "SM",
              icon: ['fas', 'address-book'],
            },
          ],
        },
        {
          title: "Account",
          openTab: false,
          icon: ['fas', 'user'],
          children: [
            {
              title: "My Account",
              icon: ['fas', 'user'],
            },
            {
              title: "Salary",
              icon: ['fas', 'money-bill-wave'],
            },
            {
              title: "History",
              icon: ['fas', 'clock-rotate-left'],
            },
          ],
        },
        {
          title: "ioGamify",
          openTab: false,
          icon: ['fas', 'gamepad'],
          children: [
            {
              title: "My Performance",
              icon: ['fas', 'ranking-star'],
            },
            {
              title: "Rewards",
              icon: ['fas', 'gift'],
            },
            {
              title: "View Awards",
              icon: ['fas', 'trophy'],
            },
          ],
        },
        {
          title: "Projects",
          openTab: false,
          icon: ['fas', 'folder-closed'],
          children: [
            {
              title: "Charts",
              icon: ['fas', 'chart-simple'],
            },
            {
              title: "Table",
              icon: ['fas', 'table'],
            },
          ],
        },
        {
          title: "Rules",
          icon: ['fas', 'newspaper'],
          openTab: false,
        },
      ],
    };
  },
};
</script>

<style scoped>

.icon {
    margin-right: 12px;
}

.child {
  margin-top: 5px;
  margin-left: 20px;
}

.sidebar {
  margin-top: 15px;
  text-align: left;
  margin-left: 20px;
}

.sidebar button {
  background: transparent;
  color: white;
  border-color: transparent;
  position: 30px;
}

.sidebar buttonOn {
  background: lightblue;
  border-radius: 12px;
  color: black;
  border-color: transparent;
  position: 30px;
}

.logo {
  margin-top: 20px;
  width: 150px;
  margin-bottom: 10px;
}

aside {
  display: flex;
  flex-direction: column;
  width: 250px;
  overflow: hidden;
  min-height: 100vh;
  padding-top: 0px;

  background-color: #1c3e70;
  color: #ffffff;

  transition: 0.2s ease-out;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
