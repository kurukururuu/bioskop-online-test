const getHistoryStatus = (status) => {
  switch (status) {
    case 1:
    case 'success':
      return {
        class: 'text-green-500',
        text: 'Berhasil',
      }
    case 2:
    case 'expired':
      return {
        class: 'text-red-secondary',
        text: 'Kadaluarsa',
        red: true
      }
    case 3:
    case 'failed':
      return {
        class: 'text-red-secondary',
        text: 'Gagal',
        red: true
      }
    case 4:
    case 'canceled':
      return {
        class: 'text-red-secondary',
        text: 'Canceled',
        red: true
      }
    case 0:
    case 'pending':
    default:
      return {
        class: 'text-yellow-primary',
        text: 'Menunggu Pembayaran'
      }
  }
}

export default getHistoryStatus