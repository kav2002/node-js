let mailer=require('nodemailer')
let transport=mailer.createTransport({
    service:'gmail',
    auth:{
        user:'kavyakoudi21@gmail.com',
        pass:'skuhgmokctzicehv'
    },
})

var mailoptions={

    from:'kavyakoudi21@gamil.com',
    to: 'kavyakoudi30@gmail.com',
    subject:'anything',
    text:'im working '
}
transport.sendMail(mailoptions,(error:any,resolve:any)=>{
if(error) throw error

console.log('sent mail')
})