
const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: 'Max',
                    last: 'Wong'
                },
                login: {
                    username: 'mario'
                },
                picture: {
                    large: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-fuY5eLWJrmwSr9qY5v5BjMZnPpIXy02VDWeRTIm&s'
                }
            }
        ]
    }
}


// 使用jest.fn().mockResolvedValue(参数)方法来模拟axios向后端的请求
// 参数是假数据，是我们自己模拟的api返回回来的数据
const mockAxios = {
    // 模拟get请求，按照规律，也可以模拟post请求；
    get: jest.fn().mockResolvedValue(mockResponse)
}

export default mockAxios
