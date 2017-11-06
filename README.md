# univ-sys
University System

# How to use
- ``` git clone git@github.com:tochix/univ.sys.git ```
- ``` cd univ.sys ```
- ``` java -Dfile.encoding=UTF-8 -classpath target/classes:<log4j-lib-path> com.ogb.anselm.univ.sys.Server <portNumber> ``` 
- make sure <portNumber> is not a priviledged port(1 - 1023). Pick for example 8025
- from another computer on same network, or from another tty on same machine
- telnet localhost|ip-addr <port>
- you should be presented with an interactive menu
- run the simulator from another tty ``` ./simulator.sh localhost|ip-addr <port> | telnet ```

