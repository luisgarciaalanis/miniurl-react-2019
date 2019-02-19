# miniurl-react
URL shrinking service frontend written in React.

## On mac or linux you can run this local by doing the following:
1. Install Docker
2. Install git
3. Install [Opctl](https://opctl.io/docs/getting-started/opctl.html)
4. You need to have the [backend service](https://github.com/luisgarciaalanis/miniurl-node-svc) running.
5. Open a terminal
6. Run: git clone https://github.com/luisgarciaalanis/miniurl-react
7. cd miniurl-react
8. Run: opctl run debug
   - It will download the needed containers and run them.
   - It will build the frontend bundle.
   - It will launch the bundle on an Nginx container.
9.  You are done, use http://localhost/

## To stop the service
1. Ctrl+C on the terminal.
   - This will stop and remove the containers.

## run tests
opts run test

