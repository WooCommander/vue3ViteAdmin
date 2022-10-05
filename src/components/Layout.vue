<template>
  <base-layout>
    <div class="layout">
      <div class="container">
        <div class="navigation">
          <ul>
            <li>
              <a href="http://">
                <span class="icon"><i class="fa-brands fa-apple"></i>
                </span>
                <span class="title">
                  <h2>TirScript</h2>
                </span></a>
            </li>
            <li>
              <a href="http://">
                <span class="icon"><i class="fa-solid fa-house-user"></i>

                </span>
                <span class="title">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a href="http://">
                <span class="icon"><i class="fa-solid fa-users"></i>

                </span>
                <span class="title">
                  Customers
                </span>
              </a>

            </li>
            <li>
              <a href="http://">
                <span class="icon"><i class="fa-regular fa-message"></i>
                </span>
                <span class="title">
                  Message
                </span>
              </a>

            </li>
            <li>
              <a href="http://">
                <span class="icon"><i class="fa-sharp fa-solid fa-circle-info"></i>

                </span>
                <span class="title">
                  Help
                </span>
              </a>

            </li>
            <li>
              <a href="http://">
                <span class="icon"><i class="fa-solid fa-gear"></i>

                </span>
                <span class="title">
                  Settings
                </span>
              </a>
            </li>
            <li>
              <a href="http://">
                <span class="icon">
                  <i class="fa-solid fa-right-from-bracket"> </i>

                </span>
                <span class="title">
                  Sign Out
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="main">
          <div class="topbar">
            <div class="toggle" @click="toggleMenu"></div>
            <div class="search">
              <label>
                <input type="text" placeholder="Search here">
                <i class="fa fa-solid fa-magnifying-glass"></i>
              </label>

            </div>
            <div class="user">
              <img src="../assets/img/user.jpg" alt="">
            </div>
          </div>
          <div class="cardBox">
            <div class="card">
              <div>
                <div class="numbers">1,042</div>
                <div class="cardName">Daily Views</div>
              </div>
              <div class="iconBox">
                <i class="fa-regular fa-eye"></i>
              </div>
            </div>
            <div class="card">
              <div>
                <div class="numbers">80</div>
                <div class="cardName">Sales</div>
              </div>
              <div class="iconBox">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
            <div class="card">
              <div>
                <div class="numbers">208</div>
                <div class="cardName">Comments</div>
              </div>
              <div class="iconBox">
                <i class="fa-solid fa-comment"></i>
              </div>
            </div>
            <div class="card">
              <div>
                <div class="numbers">6,042</div>
                <div class="cardName">Earning</div>
              </div>
              <div class="iconBox">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
            </div>
          </div>
          <div class="details">
            <div class="recentOrders">
              <div class="cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" class="btn">View All</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payments</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>start</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span class="status delivered">Delivered</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td><span class="status delivered">Delivered</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$600</td>
                    <td>Paid</td>
                    <td><span class="status">Returned</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                  <tr>
                    <td>start</td>
                    <td>$300</td>
                    <td>Paid</td>
                    <td><span class="status inprogress">In progress</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="recentCustomers">
              <div class="cardHeader">
                <h2>Recent Customers</h2>
                <a href="#" class="btn">View All</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>
  

<script setup>
import { ref } from 'vue'
import baseLayout from "../layout/base-layout.vue"
components: { baseLayout }
defineProps({
  msg: String
})

function toggleMenu() {
  let toggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main');

  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
  main.classList.toggle('active')
}

const count = ref(0)
</script>

<style lang="less">
.layout {
  .container {
    position: relative;
    width: 100%;


    .navigation {
      position: fixed;
      width: 300px;
      height: 100%;
      background: #003147;
      transform: 0.5s;
      overflow-x: hidden;


      ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        li {
          position: relative;
          width: 100%;
          list-style: none;
          color: #fff;

          a {
            position: relative;
            display: block;
            width: 100%;
            display: flex;
            text-decoration: none;
            color: #fff;
          }

          .icon {
            position: relative;
            display: block;
            min-width: 60px;
            height: 60px;
            line-height: 60px;
            text-align: center;
          }

          .title {
            display: block;
            padding: 0 10px;
            height: 60px;
            ;
            line-height: 60px;
            white-space: nowrap;
          }

          &:hover {
            background: #03a9f4;
          }

          &:nth-child(1) {
            a {
              display: flex;
              margin-bottom: 20px;
            }

            :hover {
              background: transparent;


            }
          }
        }
      }
    }

    .navigation.active {
      width: 60px;
      transition: .5s;
    }

    .main.active {
      width: calc(100% - 60px);
      left: 60px;
    }

    .main {
      position: absolute;
      width: calc(100% - 300px);
      left: 300px;
      min-height: 100vh;
      background-color: #f5f5f5;
      transition: 0.5s;

      .topbar {
        width: 100%;
        background: #fff;
        padding: 0 10px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .toggle {
          position: relative;
          width: 60px;
          height: 60px;
          cursor: pointer;

          &::before {
            content: '\f0c9';
            font-family: fontAwesome;
            position: absolute;
            width: 60px;
            height: 100%;
            line-height: 60px;
            font-size: 24px;
            text-align: center;
            color: #111;
          }
        }

        .search {
          position: relative;
          width: 400px;
          margin: 0 10px;

          label {
            position: relative;
            width: 100%;

            input {
              width: 100%;
              height: 40px;
              border-radius: 40px;
              padding: 5px 20px;
              padding-left: 35px;
              outline: none;
              border: 1px solid rgba(0, 0, 0, .2);
            }

            .fa {
              position: absolute;
              left: 15px;
              top: 3px;
            }


          }
        }

        .user {
          position: relative;
          min-width: 50px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .cardBox {
        position: relative;
        width: 100%;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;

        .card {
          position: relative;
          background-color: #fff;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          cursor: pointer;

          .numbers {
            position: relative;
            font-size: 2em;
            font-weight: 500;

          }

          .cardName {
            color: #999;
          }

          .iconBox {
            color: #03a9f4;
          }
        }
      }

      .details {
        position: relative;
        width: 100%;
        display: grid;
        padding: 20px;
        padding-top: 0;
        grid-template-columns: 2fr 1fr;

        .recentOrders {
          position: relative;
          display: grid;
          min-height: 530px;
          background: #fff;
          padding: 20px;

          .cardHeader {
            display: flex;
            justify-content: space-between;

            align-items: flex-start;

            h2 {
              font-weight: 600;
            }

            .btn {
              position: relative;
              padding: 5px 10px;
              background: #03a9f4;
              color: #fff;
              text-decoration: none;
              border-radius: 6px;

            }
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;

            thead {
              td {
                font-weight: 600;

              }
            }

            tbody {
              tr {
                border-bottom: 1px solid rgba(0, 0, 0, .1);

                &:hover {
                  background: #03a9f4;
                  color: #fff;
                }
              }
            }
          }
        }

      }
    }
  }
}
</style>
  