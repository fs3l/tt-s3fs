FUSE authentication
---


```
s3fs_chown
s3fs_chmod_nocopy
s3fs_rename->rename_directory
s3fs_chmod
|
+-> chk_dir_object_type
     |
     +-> get_object_attribute
          |
          |   PutHeadRequest
          |   insertAuthHeaders
          +-> HeadRequest
                |
                +-> insertV4Headers
                      |
                      +-> CalcSignature: s3fs_HMAC256

```


