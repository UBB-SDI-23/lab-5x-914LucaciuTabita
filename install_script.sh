sudo apt-get update;
sudo apt-get install -y openjdk-19-jdk-headless;
curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
apt-get install -y nodejs
npm install npm@latest -g
npm install npm@latest -g
docker create  \
  --name sdi-postgres \
  -e POSTGRES_PASSWORD=sdi-postgres \
  -p 5432:5432 \
  -v sdi-volume:/var/lib/postgresql/data \
  sdi-postgres;
npm install http-server -g;
