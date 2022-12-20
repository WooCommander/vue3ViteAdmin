<template>
  <base-layout>
    <div class="layout">
      <div class="container">
        <uc-menu></uc-menu>
        <div class="main">
          <uc-topbar @toggleMenu="toggleMenu"></uc-topbar>
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
                    <td><span class="status pending">In progress</span></td>
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
                    <td><span class="status pending">In progress</span></td>
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
              <table>
                <tbody>
                  <tr>
                    <td width="60px">
                      <div class="imgBx"><img src="../assets/img/img1.jpg" alt=""></div>
                    </td>
                    <td>
                      <h4>David<br><span>Italy</span></h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div class="imgBx"><img src="../assets/img/img2.jpg" alt=""></div>
                    </td>
                    <td>
                      <h4>David<br><span>Italy</span></h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div class="imgBx"><img src="../assets/img/img3.jpg" alt=""></div>
                    </td>
                    <td>
                      <h4>David<br><span>Italy</span></h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div class="imgBx"><img src="../assets/img/img4.jpg" alt=""></div>
                    </td>
                    <td>
                      <h4>David<br><span>Italy</span></h4>
                    </td>
                  </tr>
                  <tr>
                    <td width="60px">
                      <div class="imgBx"><img src="../assets/img/img5.jpg" alt=""></div>
                    </td>
                    <td>
                      <h4>David<br><span>Italy</span></h4>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>
  

<script setup lang="ts">
import { ref } from 'vue'
import baseLayout from "./base-layout.vue"
import ucMenu from "./components/uc-menu.vue"
import ucTopbar from "./components/uc-topbar.vue"
components: [baseLayout, ucMenu, ucTopbar];

const props = defineProps({
  name: String,
  msg: { type: String, default: "Test" }
})
const count = ref(0);
const toggleMenu = () => {
  let toggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main');

  toggle?.classList.toggle('active');
  navigation?.classList.toggle('active');
  main?.classList.toggle('active');
}



</script>

<style lang="less">
.layout {
  .container {
    position: relative;
    width: 100%;




    .main {
      position: absolute;
      width: calc(100% - 300px);
      left: 300px;
      min-height: 100vh;
      background-color: #f5f5f5;
      transition: 0.5s;



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
        grid-gap: 20px;

        .recentOrders {
          position: relative;
          // display: grid;
          min-height: 530px;
          background: #fff;
          padding: 20px;
          color: #111;

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

                &:last-child {
                  border-bottom: none;
                }
              }
            }

            thead tr td:last-child,
            tbody tr td:last-child {
              text-align: right;
            }

            thead tr td:nth-child(2),
            tbody tr td:nth-child(2) {
              text-align: right;
              padding-right: 20px;
            }

            thead tr td:nth-child(2),
            tbody tr td:nth-child(2) {
              text-align: right;
              padding-right: 20px;
            }

            thead tr td:nth-child(3),
            tbody tr td:nth-child(3) {
              text-align: center;

            }
          }

          tr {
            td {
              padding: 9px 5px;
            }

          }

          .status {
            position: relative;
            padding: 2px 4px;
            background-color: #f00;
            color: #fff;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 300;
            letter-spacing: 1px;

            &.delivered {
              background: #8de02c;
            }

            &.pending {
              background: #f9ca3f;
            }

            &.inprogress {
              background: #1795ce;
            }

            &.return {
              background: #f00;
            }
          }

        }

        .recentCustomers {
          position: relative;
          // display: grid;
          min-height: 530px;
          background: #fff;
          padding: 20px;

          .imgBx {
            position: relative;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;

            img {
              position: absolute;
              top: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          table {
            border-collapse: collapse;

            tr td:last-child {
              width: 100%;
            }
          }

          table tr:hover,
          table tr:hover td h4 span {
            background: #03a9f4;
            color: #fff;
          }

          table tr td {
            padding: 7px 10px;

            h4 span {
              color: #ccc;
              font-size: 14px;
              line-height: 1.2em;
            }
          }
        }
      }


    }

  }

  @media (max-width: 992px) {
    .container {
      .navigation {
        left: -300px;

        &.active {
          left: 0;
          width: 300px;
        }
      }

      .main {
        width: 100%;
        left: 0;

        .cardBox {
          grid-template-columns: repeat(2, 1fr);
        }

        .details {
          grid-template-columns: repeat(1, 1fr);
        }

        .cardHeader h2 {
          font-weight: 600;
          font-size: 18px;
        }

        &.active {
          width: calc(100% - 300px);
          left: 300px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .container .main .cardBox {
      grid-template-columns: repeat(1, 1fr);
    }

    .container {


      .details .recentOrders table {
        width: 600px;
      }

      .navigation {
        width: 100%;
        left: -100%;
        z-index: 1000;

        &.active {
          width: 100%;
          left: 0;
        }
      }

      .main .topbar {
        .toggle.active {
          z-index: 10000;

          &::before {
            color: #fff;
          }
        }
      }
    }

  }
}
</style>
  