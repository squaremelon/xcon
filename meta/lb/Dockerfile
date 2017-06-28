FROM nginx:latest
RUN apt-get update && \
  apt-get install -y -qq wget unzip && \
  wget -q -O /tmp/consul-template.zip https://releases.hashicorp.com/consul-template/0.18.5/consul-template_0.18.5_linux_amd64.zip && \
  unzip -qq -a /tmp/consul-template.zip -d /opt/consul-template/ && \
  rm -f /tmp/consul-template.zip;
CMD ["/bin/bash", "-c", \
  "nginx; /opt/consul-template/consul-template -config='/code/consul-template.conf';"]