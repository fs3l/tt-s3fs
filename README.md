Installation
------------

* On Linux, ensure you have all the dependencies:

On Ubuntu 14.04:

```
sudo apt-get install automake autotools-dev fuse g++ git libcurl4-gnutls-dev libfuse-dev libssl-dev libxml2-dev make pkg-config
```

On CentOS 7:

```
sudo yum install automake fuse fuse-devel gcc-c++ git libcurl-devel libxml2-devel make openssl-devel
```

Then compile from master via the following commands:

```
git clone https://github.com/s3fs-fuse/s3fs-fuse.git
cd s3fs-fuse
./autogen.sh
./configure
make
sudo make install
```

* On Mac OS X, install via [Homebrew](http://brew.sh/):

```ShellSession
$ brew cask install osxfuse
$ brew install s3fs
```

Modifications
------------
So far, there would be a printting out of parameters when writing any files. The output would appear in /output.txt 

