export default {
  state: {
    shopList: [
      { 
        id: 1, 
        title: 'Nike Red',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam, quas a cupiditate et in odit error neque natus? Magni necessitatibus, facilis porro distinctio animi quia dolor ea itaque harum.',
        img: require('../assets/shop-img/1.png'),
        gallery: [
          { name: 'Nike boots first', img: require('../assets/shop-img/1.png')},
          { name: 'Nike boots second', img: require('../assets/shop-img/2.png')},
          { name: 'Nike boots third', img: require('../assets/shop-img/3.png')}
        ]
      },
      { 
        id: 2, 
        title: 'Nike Default',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam, quas a cupiditate et in odit error neque natus? Magni necessitatibus, facilis porro distinctio animi quia dolor ea itaque harum.',
        img: require('../assets/shop-img/4.png'),
        gallery: [
          { name: 'Nike boots first', img: require('../assets/shop-img/4.png')},
          { name: 'Nike boots second', img: require('../assets/shop-img/5.png')},
          { name: 'Nike boots third', img: require('../assets/shop-img/6.png')}
        ]
      },
      { 
        id: 3, 
        title: 'Nike Green',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam, quas a cupiditate et in odit error neque natus? Magni necessitatibus, facilis porro distinctio animi quia dolor ea itaque harum.',
        img: require('../assets/shop-img/7.png'),
        gallery: [
          { name: 'Nike boots first', img: require('../assets/shop-img/7.png')},
          { name: 'Nike boots second', img: require('../assets/shop-img/8.png')},
          { name: 'Nike boots third', img: require('../assets/shop-img/9.png')}
        ]
      },
      { 
        id: 4, 
        title: 'Nike Red',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quisquam, quas a cupiditate et in odit error neque natus? Magni necessitatibus, facilis porro distinctio animi quia dolor ea itaque harum.',
        img: require('../assets/shop-img/10.png'),
        gallery: [
          { name: 'Nike boots first', img: require('../assets/shop-img/11.png')},
          { name: 'Nike boots second', img: require('../assets/shop-img/12.png')},
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList
    },
    getProduct: (state) => (id) => {
      return state.shopList.find(product => product.id == id)
    }
  }
}