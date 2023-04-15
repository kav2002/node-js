let mailer=require('nodemailer')
let transport=mailer.createTransport({

    service:'gmail',
    auth:{

        user:'kavyakoudi21@gmail.com',
        pass:'skuhgmokctzicehv'
    },
})
var options={
    from:'kavyakoudi21@gmail.com',
    to:'kavyakoudi30@gmail.com',
    subject:'testing',
    text:'hello please work'
}

transport.sendMail(options,(err:any,res:any)=>{
if(err)throw err

console.log('mail sent')
})