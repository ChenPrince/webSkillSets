《发送方未收到响应会重新请求》

.请画出三次握手和四次挥手的示意图

    这样---那样

.为什么连接的时候是三次握手？

    需要分别验证接受和发送的能力

.什么是半连接队列？

    为建立起连接的连接，比如已发送（syn_send）、已接受（syn_rsv）
    全链接就是握手完成建立的连接

.ISN(Initial Sequence Number)是固定的吗？

    不固定

。三次握手过程中可以携带数据吗？

    第三次握手可以

.如果第三次握手丢失了，客户端服务端会如何处理？

    超时重传几次

SYN 攻击是什么？

    建立大量的半连接状态的请求，导致服务器无法响应正常的请求

.挥手为什么需要四次？

    因为当服务端收到客户端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当服务端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉客户端，“你发的FIN报文我收到了”。只有等到我服务端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四次挥手。

四次挥手释放连接时，等待 2MSL 的意义?

    为了保证客户端发送的最后一个ACK报文段能够到达服务器。因为这个ACK有可能丢失，从而导致处在LAST-ACK状态的服务器收不到对FIN-ACK的确认报文。服务器会超时重传这个FIN-ACK，接着客户端再重传一次确认，重新启动时间等待计时器。最后客户端和服务器都能正常的关闭。假设客户端不等待2MSL，而是在发送完ACK之后直接释放关闭，一但这个ACK丢失的话，服务器就无法正常的进入关闭连接状态。

握手：syn seq ack ACK

    状态：SYN_SENT、SYN_RCVD、ESTABLISHED

https://blog.csdn.net/hyg0811/article/details/102366854?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166852973716782425114495%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166852973716782425114495&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-102366854-null-null.142^v63^control,201^v3^control_1,213^v2^t3_control2&utm_term=tcp%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B&spm=1018.2226.3001.4187
