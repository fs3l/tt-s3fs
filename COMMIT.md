Tasks

- Task 1: Interprete a load operation as a series of key-value reads. 
    - This is a page read A key is a page address (path+offset) and a value is the page content
    - Print out the "GetObject" call by key-value reads.


S3FS curl call chain
---

```
(Fuse level)
load
|
+-> GetObject(path, fd, (*iter)->offset, need_load_size)
     |
     +-> Request()
          |
          +-> MultiPerform()
              MultiRead()
              |
              +-> S3fsMultiCurl::RequestPerformWrapper()
                    |
                    +-> RequestPerform()
                         |
                         +-> Curl_easy_perform(hCurl)    (Curl level)
                              |
                              +-> open ssl
                         

```



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



