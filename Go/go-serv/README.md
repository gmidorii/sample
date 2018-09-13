# Go-Serv-Sample

### Memo
```go
// hook_unix.go

package net

import "syscall"

var (
	testHookDialChannel  = func() {} // for golang.org/issue/5349
	testHookCanceledDial = func() {} // for golang.org/issue/16523

	// Placeholders for socket system calls.
	socketFunc        func(int, int, int) (int, error)         = syscall.Socket
	closeFunc         func(int) error                          = syscall.Close
	connectFunc       func(int, syscall.Sockaddr) error        = syscall.Connect
	listenFunc        func(int, int) error                     = syscall.Listen
	acceptFunc        func(int) (int, syscall.Sockaddr, error) = syscall.Accept
	getsockoptIntFunc func(int, int, int) (int, error)         = syscall.GetsockoptInt
)
```


Handle function register 2 pattarn same "/tree" and "/tree/"
```go
// server.go

// Handle registers the handler for the given pattern.
// If a handler already exists for pattern, Handle panics.
func (mux *ServeMux) Handle(pattern string, handler Handler) {
	// ABRIDGEMENT

	// Helpful behavior:
	// If pattern is /tree/, insert an implicit permanent redirect for /tree.
	// It can be overridden by an explicit registration.
	n := len(pattern)
	if n > 0 && pattern[n-1] == '/' && !mux.m[pattern[0:n-1]].explicit {
		// If pattern contains a host name, strip it and use remaining
		// path for redirect.
		path := pattern
		if pattern[0] != '/' {
			// In pattern, at least the last character is a '/', so
			// strings.Index can't be -1.
			path = pattern[strings.Index(pattern, "/"):]
		}
		url := &url.URL{Path: path}
		mux.m[pattern[0:n-1]] = muxEntry{h: RedirectHandler(url.String(), StatusMovedPermanently), pattern: pattern}
	}
}

func (srv *Server) Serve(l net.Listener) error {
	// ABRIDGEMENT

	for {
		rw, e := l.Accept()
		if e != nil {
			// ABRIDGEMENT
			return e
		}
		tempDelay = 0
		c := srv.newConn(rw)
		c.setState(c.rwc, StateNew) // before Serve can return

		// 1 request 1 goroutine
		go c.serve(ctx)

	}
}


	// ?
	// hijackedv is whether this connection has been hijacked
	// by a Handler with the Hijacker interface.
	// It is guarded by mu.
	hijackedv bool
	

	// handle request

	// HTTP cannot have multiple simultaneous active requests.[*]
	// Until the server replies to this request, it can't read another,
	// so we might as well run the handler in this goroutine.
	// [*] Not strictly true: HTTP pipelining. We could let them all process
	// in parallel even if their responses need to be serialized.
	// But we're not going to implement HTTP pipelining because it
	// was never deployed in the wild and the answer is HTTP/2.
	serverHandler{c.server}.ServeHTTP(w, w.req)
```

#### syscall
- socket
- accept
	- get connection from socket
	- create new socket(connected)
	- return new socket
