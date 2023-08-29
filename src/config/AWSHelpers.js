require()
const { S3Client } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({
    credentials:{
        accessKeyId:'',
        secretAccessKey:''
    }
})

