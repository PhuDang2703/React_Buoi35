import React from 'react'
import style from './Checkout.module.css'
// import BaiTapBookingTicket from './BaiTapBookingTicket.css'
import data from '../../danhSachGhe.json'

const renderSeat = () => {
    return data.map((ghe, index) => {
        return <button className={`${style['ghe']}`} key={index}>{ghe.soGhe}</button>
    })
}

export default function Checkout(props) {
    return (
        <div className='min-h-screen mt-5'>
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>
                    <div className='flex flex-col items-center mt-5'>
                        <div className='bg-black' style={{ width: '80%', height: 15 }}>

                        </div>
                        <div className={`${style['trapezoid']} text-center`}>
                            <h3 className='mt-3 text-black'>Màn hình</h3>
                        </div>
                        <div>{renderSeat()}</div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <h3 className='text-green-400 text-center'></h3>
                    <hr />
                    <h3 className='text-xl mt-2'>Pokemon</h3>
                    <p>Địa điểm: BHD Star - Vincom 3/2</p>
                    <p>Ngày chiếu: 25/04/2021 - 12:05 RẠP 5</p>
                    <hr />
                    <div className='flex flex-row'>
                        <div className='w-4/5'>
                            <span className='text-red-400'>Ghế</span>
                        </div>
                        <div className='text-right col-span-1'>
                            <span className='text-green-800 text-lg'>0đ</span>
                        </div>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <i>Email</i> <br />

                    </div>
                    <div className='my-5'>
                        <i>Phone</i> <br />

                    </div>
                    <hr />
                    <div className='mb-0 h-full flex flex-col justify-end items-center' style={{ marginBottom: 0 }}>
                        <div className='bg-green-500 text-white w-full text-center py-3 font-bold text-2xl'>
                            Đặt vé
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
