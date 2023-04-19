if [ -f .env ] ; then
  source .env;
fi;

if [ -z $WEBHOOK_URL ] ; then
  echo '$WEBHOOK_URL should be set!'
  exit 1;
fi;

cd /home/ubuntu/lab-5x-georgerapeanu/
git pull

cd backend
mkdir target

RELEASE_URL=$(curl -Ls -o /dev/null -w %{url_effective} https://github.com/UBB-SDI-23/lab-5x-georgerapeanu/releases/latest)
PACKAGE_URL=$(echo $RELEASE_URL | sed -E "s/(\/tag)(\/[^/]*)$/\/download\2/")
curl -sL --output ./target/sdi.war $PACKAGE_URL/sdi.war

sudo docker-compose up&

curl -X POST -d "http://$(curl -s http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip -H "Metadata-Flavor: Google"
):80" $WEBHOOK_URL
