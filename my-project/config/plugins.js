module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID", "AKIATQK7T2AGQQ5V5LO"),
      secretAccessKey: env(
        "AWS_ACCESS_SECRET",
        "ZopEXnAnoWqXdx7B8lyC+ojzWzk5hxglZ5XbmwqT"
      ),
      region: env("AWS_REGION", "eu-central-1"),
      params: {
        Bucket: env("AWS_BUCKET_NAME", "strapi-images-noor"),
      },
    },
  },
});
