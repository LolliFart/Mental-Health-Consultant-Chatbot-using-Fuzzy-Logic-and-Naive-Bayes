import skfuzzy as fuzzy
from skfuzzy import control
import numpy as np
import itertools 
from itertools import permutations
from sqlalchemy import null
from tqdm import tqdm


anx_rls = list()
anx_list = list()
str_list = list()
dep_list = list()
inputs = ['NA', 'SOT','GOT', 'MOT']
comb = list(permutations(inputs))
len(comb)
c = list(itertools.product(inputs,inputs,inputs,inputs,inputs, inputs,inputs))
x = 0
z = 0
lisZ = list()
total = 0
for i in c:
  for y in i:
    if y == 'NA':
      total = total + 0
    elif y == 'SOT':
      total = total + 1
    elif y == 'GOT':
      total = total + 2
    elif y == 'MOT':
      total = total + 3
  lisZ.append(total*2)
  total = 0

for x in lisZ:
  if x >= 0 and x <= 7:
    anx_list.append("Normal")
  elif x >= 8 and x <=9:
    anx_list.append("Mild")
  elif x >= 10 and x <=14:
    anx_list.append("Moderate")
  elif x >= 15 and x <=19:
    anx_list.append("Severe")
  else:
    anx_list.append("Very Severe")

  if x >= 0 and x <= 14:
    str_list.append("Normal")
  elif x >= 15 and x <=18:
    str_list.append("Mild")
  elif x >= 19 and x <=25:
    str_list.append("Moderate")
  elif x >= 26 and x <=33:
    str_list.append("Severe")
  else:
    str_list.append("Very Severe")

  if x >= 0 and x <= 9:
    dep_list.append("Normal")
  elif x >= 10 and x <=13:
    dep_list.append("Mild")
  elif x >= 14 and x <=20:
    dep_list.append("Moderate")
  elif x >= 21 and x <=27:
    dep_list.append("Severe")
  else:
    dep_list.append("Very Severe")
 

print('number of rules is',len(c),len(anx_list),len(str_list),len(dep_list))


p1 = control.Antecedent(np.arange(0, 9, 1), 'p1')
p2 = control.Antecedent(np.arange(0, 9, 1), 'p2')
p3 = control.Antecedent(np.arange(0, 9, 1), 'p3')
p4 = control.Antecedent(np.arange(0, 9, 1), 'p4')
p5 = control.Antecedent(np.arange(0, 9, 1), 'p5')
p6 = control.Antecedent(np.arange(0, 9, 1), 'p6')
p7 = control.Antecedent(np.arange(0, 9, 1), 'p7')

z = control.Consequent(np.arange(0, 11, 1), 'z')


p1['NA'] = fuzzy.trimf(p1.universe, [0, 1, 2])
p1['SOT'] = fuzzy.trimf(p1.universe, [2, 3, 4])
p1['GOT'] = fuzzy.trimf(p1.universe, [4, 5, 6])
p1['MOT'] = fuzzy.trimf(p1.universe, [6, 7, 8])

p2['NA'] = fuzzy.trimf(p2.universe, [0, 1, 2])
p2['SOT'] = fuzzy.trimf(p2.universe, [2, 3, 4])
p2['GOT'] = fuzzy.trimf(p2.universe, [4, 5, 6])
p2['MOT'] = fuzzy.trimf(p2.universe, [6, 7, 8])

p3['NA'] = fuzzy.trimf(p3.universe, [0, 1, 2])
p3['SOT'] = fuzzy.trimf(p3.universe, [2, 3, 4])
p3['GOT'] = fuzzy.trimf(p3.universe, [4, 5, 6])
p3['MOT'] = fuzzy.trimf(p4.universe, [6, 7, 8])

p4['NA'] = fuzzy.trimf(p4.universe, [0, 1, 2])
p4['SOT'] = fuzzy.trimf(p4.universe, [2, 3, 4])
p4['GOT'] = fuzzy.trimf(p4.universe, [4, 5, 6])
p4['MOT'] = fuzzy.trimf(p4.universe, [6, 7, 8])

p5['NA'] = fuzzy.trimf(p5.universe, [0, 1, 2])
p5['SOT'] = fuzzy.trimf(p5.universe, [2, 3, 4])
p5['GOT'] = fuzzy.trimf(p5.universe, [4, 5, 6])
p5['MOT'] = fuzzy.trimf(p5.universe, [6, 7, 8])

p6['NA'] = fuzzy.trimf(p6.universe, [0, 1, 2])
p6['SOT'] = fuzzy.trimf(p6.universe, [2, 3, 4])
p6['GOT'] = fuzzy.trimf(p6.universe, [4, 5, 6])
p6['MOT'] = fuzzy.trimf(p6.universe, [6, 7, 8])

p7['NA'] = fuzzy.trimf(p7.universe, [0, 1, 2])
p7['SOT'] = fuzzy.trimf(p7.universe, [2, 3, 4])
p7['GOT'] = fuzzy.trimf(p7.universe, [4, 5, 6])
p7['MOT'] = fuzzy.trimf(p7.universe, [6, 7, 8])

z['Normal'] = fuzzy.trimf(z.universe, [0, 1, 2])
z['Mild'] = fuzzy.trimf(z.universe, [2, 3, 4])
z['Moderate'] = fuzzy.trimf(z.universe, [4, 5, 6])
z['Severe'] = fuzzy.trimf(z.universe, [6, 7, 8])
z['Very Severe'] = fuzzy.trimf(z.universe, [8, 9, 10])

count = 0
all_anx_rls = list()
all_str_rls = list()
all_dep_rls = list()
anx_rls = list()
str_rls = list()
dep_rls = list()
anx_perf_calc = list()
str_perf_calc = list()
dep_perf_calc = list()
while (count <16384):   
  anx_result = control.Rule(p1[c[count][0]] & p2[c[count][1]] & p3[c[count][2]] & p4[c[count][3]] & p5[c[count][4]]& p6[c[count][5]] & p7[c[count][6]], z[anx_list[count]])
  str_result = control.Rule(p1[c[count][0]] & p2[c[count][1]] & p3[c[count][2]] & p4[c[count][3]] & p5[c[count][4]]& p6[c[count][5]] & p7[c[count][6]], z[str_list[count]])
  dep_result = control.Rule(p1[c[count][0]] & p2[c[count][1]] & p3[c[count][2]] & p4[c[count][3]] & p5[c[count][4]]& p6[c[count][5]] & p7[c[count][6]], z[dep_list[count]])
  
  if(count < 2):
    anx_rls.append(anx_result)
    str_rls.append(str_result)
    dep_rls.append(dep_result)
  elif (count <16384):
    if(count%2 == 0):      
      all_anx_rls.append(anx_rls)
      all_str_rls.append(str_rls)
      all_dep_rls.append(dep_rls)
      anx_rls = list()
      str_rls = list()
      dep_rls = list()
    anx_rls.append(anx_result)
    str_rls.append(str_result)
    dep_rls.append(dep_result)
  count = count + 1

if(count == 16384):
  print("DONE CREATING RULES...")
  all_anx_rls.append(anx_rls)
  all_str_rls.append(str_rls)
  all_dep_rls.append(dep_rls)
  anx_rls = list()
  str_rls = list()
  dep_rls = list()
  anx_rls.append(anx_result)
  str_rls.append(str_result)
  dep_rls.append(dep_result)


anx_fuzz = list()
str_fuzz = list()
dep_fuzz = list()


print("APPLYING STRESS RULES...")
for x in tqdm(all_str_rls):
  str_perf_calc.append(control.ControlSystem(x))

print("APPLYING ANXIETY RULES...")
for x in tqdm(all_anx_rls):
  anx_perf_calc.append(control.ControlSystem(x))

print("APPLYING DEPRESSION RULES...")
for x in tqdm(all_dep_rls):
  dep_perf_calc.append(control.ControlSystem(x))

print("DONE CONTROL SYSTEM")
for p in tqdm(str_perf_calc):
  str_fuzz.append(control.ControlSystemSimulation(p))

for p in tqdm(anx_perf_calc):
  anx_fuzz.append(control.ControlSystemSimulation(p))

for p in tqdm(dep_perf_calc):
  dep_fuzz.append(control.ControlSystemSimulation(p))
print("DONE SYSTEM SIMULATION")  

def fuzzyInput(x1,x2,x3,x4,x5,x6,x7,test):
  i = 0
  d = null
  while i < 8192:
    try:
      
      if(test == "stress"):
        str_fuzz[i].input['p1'] = x1
        str_fuzz[i].input['p2'] = x2
        str_fuzz[i].input['p3'] = x3
        str_fuzz[i].input['p4'] = x4
        str_fuzz[i].input['p5'] = x5
        str_fuzz[i].input['p6'] = x6
        str_fuzz[i].input['p7'] = x7

        str_fuzz[i].compute()
        d = str_fuzz[i].output

      elif(test == "anxiety"):
        anx_fuzz[i].input['p1'] = x1
        anx_fuzz[i].input['p2'] = x2
        anx_fuzz[i].input['p3'] = x3
        anx_fuzz[i].input['p4'] = x4
        anx_fuzz[i].input['p5'] = x5
        anx_fuzz[i].input['p6'] = x6
        anx_fuzz[i].input['p7'] = x7

        anx_fuzz[i].compute()
        d = anx_fuzz[i].output
      elif(test == "depression"):
        dep_fuzz[i].input['p1'] = x1
        dep_fuzz[i].input['p2'] = x2
        dep_fuzz[i].input['p3'] = x3
        dep_fuzz[i].input['p4'] = x4
        dep_fuzz[i].input['p5'] = x5
        dep_fuzz[i].input['p6'] = x6
        dep_fuzz[i].input['p7'] = x7

        dep_fuzz[i].compute()
        d = dep_fuzz[i].output
    except:
      i+=1
    else:
      print("found in", i)      
      break

  return d

def defuzz(x):
  if x == 1:
    return "Normal"
  elif x == 3:
    return "Mild"
  elif x == 5:
    return "Moderate"
  elif x == 7:
    return "Severe"
  else:
    return "Very Severe"
    


