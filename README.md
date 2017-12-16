# univ-sys
University System

# How to
## run console
- ``` git clone git@github.com:tochix/univ.sys.git ```
- ``` cd univ.sys ```
- ``` java -Dfile.encoding=UTF-8 -classpath target/classes:<log4j-lib-path> com.ogb.anselm.univ.sys.Server <portNumber> ``` 
- make sure <portNumber> is not a priviledged port(1 - 1023). Pick for example 8025
- from another computer on same network, or from another tty on same machine
- telnet localhost | ip-addr <port>
- you should be presented with an interactive menu
- run the simulator from another tty ``` ./simulator.sh localhost | ip-addr <port> | telnet ```
  
## run web
- From the command line and root of the project directory, run: 
    ``` ./mvnw clean package ```
- You can then run the jar file which is now bundled with a Tomcat HTTP server, from which you can then access locally via: http://localhost:8080
- Note: To run the jar file, look in your target folder for the jar file created by maven wrapper plugin. In this case, it is named “univ.sys-0.0.1.SNAPSHOT.jar”. So run it by issuing the command:
    ``` java -jar target/univ.sys-0.0.1-SNAPSHOT.jar ```






