FROM liferay/portal:7.1.2-ga3

MAINTAINER Wouter Vernaillen <wouter@triberay.com>

USER liferay:liferay
ENV LIFERAY_HOME /opt/liferay

COPY --chown=liferay:liferay portal-ext.properties $LIFERAY_HOME/
#COPY --chown=liferay:liferay osgi/configs/* $LIFERAY_HOME/osgi/configs/
COPY --chown=liferay:liferay tomcat/bin/setenv.sh $LIFERAY_HOME/tomcat/bin/

EXPOSE 8080 11311
