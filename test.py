from pylab import*
F=0.001            #Fødsel
I=0.05             #Innvandring
POP=500            #Populasjon ved starten
T= 208             #i uker 
N=1000             #antall ganger populasjonen måles over tid
dt=T/N             #Tidsteg

pop=zeros(N)        #Lager en matrise for populasjonen
popder=zeros(N)     #Lager en matrise for den deriverte av populasjonen
tid=zeros(N)        #Lager en matrise for tid

pop[0]=POP        #Setter første populasjonsmåling til start populasjonen
tid[0]=0          #Første måling skjer ved tid = 0 uker

#Bruker Eulers metode for å finne populasjonen over T måneder:
for i in range(N-1):                  #Kjører løkken N ganger
    popder[i]=pop[i]*F + pop[i]*I     #Regner ut endringen i populasjonen fra fødsel + innvandring
    pop[i+1]=pop[i]+popder[i]*dt      #Regner så ut populasjonen for neste måling
    tid[i+1]=tid[i]+dt                
    
#Plotter populasjonen i Alexandria:
plot(tid,pop,color='darkblue')          #pynter litt på grafen :)  
title('Populasjon uten begrensninger')
ylabel('Mennesker')                      
xlabel('Tid')                            
grid()                                   
show()

